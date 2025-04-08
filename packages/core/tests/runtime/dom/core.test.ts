import { tree, ensureMeta } from "../../../src/dom";

describe("DOM Core 함수", () => {
  describe("tree 함수", () => {
    it("지정된 태그로 DOM 엘리먼트를 생성해야 함", () => {
      // 다양한 HTML 태그에 대한 테스트
      const div = tree("div");
      const span = tree("span");
      const button = tree("button");

      // 태그 이름 검증
      expect(div.tagName).toBe("DIV");
      expect(span.tagName).toBe("SPAN");
      expect(button.tagName).toBe("BUTTON");

      // DOM 엘리먼트 타입 검증
      expect(div instanceof HTMLDivElement).toBe(true);
      expect(span instanceof HTMLSpanElement).toBe(true);
      expect(button instanceof HTMLButtonElement).toBe(true);
    });

    it("생성된 엘리먼트는 document에 연결되지 않아야 함", () => {
      const div = tree("div");
      expect(div.parentNode).toBeNull();
      expect(document.body.contains(div)).toBe(false);
    });
  });

  describe("ensureMeta 함수", () => {
    it("엘리먼트에 메타데이터 객체를 생성하고 반환해야 함", () => {
      const div = document.createElement("div");
      const meta = ensureMeta(div);

      // 반환된 객체가 빈 객체인지 확인
      expect(meta).toEqual({});
      expect(typeof meta).toBe("object");
    });

    it("동일한 엘리먼트에 대해 동일한 메타데이터 객체를 반환해야 함", () => {
      const div = document.createElement("div");
      const meta1 = ensureMeta(div);
      const meta2 = ensureMeta(div);

      // 참조가 동일한지 확인 (같은 객체를 반환해야 함)
      expect(meta1).toBe(meta2);
    });

    it("메타데이터는 엘리먼트별로 고유해야 함", () => {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");

      const meta1 = ensureMeta(div1);
      const meta2 = ensureMeta(div2);

      // 서로 다른 객체여야 함
      expect(meta1).not.toBe(meta2);

      // 한 엘리먼트의 메타데이터를 수정해도 다른 엘리먼트에 영향이 없어야 함
      meta1.mounted = true;
      expect(meta2.mounted).toBeUndefined();
    });

    it("엘리먼트에 속성 추가 후 메타데이터를 통해 접근할 수 있어야 함", () => {
      const div = document.createElement("div");
      const meta = ensureMeta(div);

      // 메타데이터에 속성 추가
      meta.testProp = "test value";
      meta.count = 42;

      // 같은 엘리먼트에서 메타데이터를 다시 가져올 때 속성이 유지되어야 함
      const retrievedMeta = ensureMeta(div);
      expect(retrievedMeta.testProp).toBe("test value");
      expect(retrievedMeta.count).toBe(42);
    });
  });
});
