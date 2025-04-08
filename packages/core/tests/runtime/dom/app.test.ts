import { createForest } from "../../../src/dom/app";
import { addChild } from "../../../src/utilities/child";

describe("createForest 함수", () => {
  let originalConsoleError: typeof console.error;
  let mockConsoleError: jest.Mock;

  // 각 테스트 전에 실행
  beforeEach(() => {
    // document 요소들 초기화
    document.documentElement.innerHTML = "";

    // console.error 모킹
    originalConsoleError = console.error;
    mockConsoleError = jest.fn();
    console.error = mockConsoleError;

    // 전역 변수 리셋 (내부 appInitialized 상태 초기화)
    // @ts-ignore: 내부 상태 직접 접근 - 테스트 목적으로만 사용
    (createForest as any).__ResetAppInitializedForTesting = true;
  });

  // 각 테스트 후에 실행
  afterEach(() => {
    // 원래 console.error 복원
    console.error = originalConsoleError;
  });

  it("단일 콜백 함수로 호출 시 HTML 문서를 초기화해야 함", () => {
    // 테스트를 위해 body와 head 제거
    const existingBody = document.body;
    const existingHead = document.head;
    if (existingBody) document.documentElement.removeChild(existingBody);
    if (existingHead) document.documentElement.removeChild(existingHead);

    // 테스트 콜백 함수
    const setupFn = jest.fn((body: HTMLBodyElement) => {
      const div = document.createElement("div");
      div.id = "test-div";
      body.appendChild(div);
    });

    // 함수 호출
    const result = createForest(setupFn);

    // 검증
    expect(setupFn).toHaveBeenCalled();
    expect(document.body).toBeTruthy();
    expect(document.head).toBeTruthy();
    expect(document.body.querySelector("#test-div")).toBeTruthy();
    expect(result).toBe(document.documentElement);
  });

  it("엘리먼트와 함수로 호출 시 지정된 엘리먼트를 사용해야 함", () => {
    // 테스트 컨테이너 준비
    const container = document.createElement("div");
    container.id = "app-container";
    document.body.appendChild(container);

    // 테스트 콜백 함수
    const setupFn = jest.fn((el: HTMLElement) => {
      const child = document.createElement("span");
      child.textContent = "Hello World";
      return child;
    });

    // 함수 호출
    const result = createForest(container, setupFn);

    // 검증
    expect(setupFn).toHaveBeenCalled();
    expect(container.querySelector("span")).toBeTruthy();
    expect(container.querySelector("span")?.textContent).toBe("Hello World");
    expect(result).toBe(container);
  });

  it("선택자와 함수로 호출 시 선택자에 맞는 엘리먼트를 찾아 사용해야 함", () => {
    // 테스트 컨테이너 준비
    const container = document.createElement("div");
    container.id = "app-container";
    document.body.appendChild(container);

    // 테스트 콜백 함수
    const setupFn = jest.fn((el: HTMLElement) => {
      const child = document.createElement("span");
      child.textContent = "Hello World";
      return child;
    });

    // 함수 호출
    const result = createForest("#app-container", setupFn);

    // 검증
    expect(setupFn).toHaveBeenCalled();
    expect(container.querySelector("span")).toBeTruthy();
    expect(container.querySelector("span")?.textContent).toBe("Hello World");
    expect(result).toBe(container);
  });

  it("엘리먼트를 찾을 수 없으면 오류를 발생시켜야 함", () => {
    const setupFn = jest.fn();

    // 함수 호출 시 오류 발생 예상
    expect(() => {
      createForest("#non-existent-element", setupFn);
    }).toThrow('Root element "#non-existent-element" not found');

    // setupFn이 호출되지 않았는지 확인
    expect(setupFn).not.toHaveBeenCalled();
  });

  it("여러 번 호출 시 오류 메시지를 표시하고 null을 반환해야 함", () => {
    // 첫 번째 호출
    const result1 = createForest((body) => {
      const div = document.createElement("div");
      body.appendChild(div);
    });

    // 두 번째 호출
    const result2 = createForest((body) => {
      const div = document.createElement("div");
      body.appendChild(div);
    });

    // 검증
    expect(result1).toBe(document.documentElement);
    expect(result2).toBeNull();
    expect(mockConsoleError).toHaveBeenCalledWith("❌ createApp() was called multiple times. Only one app instance is supported.");
  });

  it("잘못된 인수 조합으로 호출 시 null을 반환해야 함", () => {
    // 잘못된 인수 조합 (빈 배열)
    const result = createForest();

    // 검증
    expect(result).toBeNull();
  });

  it("실제 컴포넌트와 통합하여 작동해야 함", () => {
    // 통합 테스트 예시
    const result = createForest((body) => {
      // 간단한 컴포넌트 생성 및 추가
      const div = document.createElement("div");
      div.id = "app-root";

      // addChild 유틸리티 사용 예시
      addChild("Hello Forest!")(div);

      body.appendChild(div);
    });

    // 검증
    expect(result).toBe(document.documentElement);
    expect(document.body.querySelector("#app-root")).toBeTruthy();
    expect(document.body.querySelector("#app-root")?.textContent).toBe("Hello Forest!");
  });
});
