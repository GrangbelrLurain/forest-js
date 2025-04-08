import { tree, ensureMeta } from "../../src/dom";
import { expectType, expectError } from "../helpers/typeTestHelpers";
import { ElementMeta } from "../../src/types";

// tree 함수 타입 테스트
// 올바른 HTML 엘리먼트 타입 반환 확인
expectType<HTMLDivElement>(tree("div"));
expectType<HTMLButtonElement>(tree("button"));
expectType<HTMLParagraphElement>(tree("p"));
expectType<HTMLHeadingElement>(tree("h1"));
expectType<HTMLAnchorElement>(tree("a"));

// 잘못된 태그명 테스트
// @ts-expect-error - 존재하지 않는 HTML 태그
expectError(tree("nonexistent-tag"));

// 타입이 아닌 값 테스트
// @ts-expect-error - 숫자는 태그명으로 사용할 수 없음
expectError(tree(123));

// @ts-expect-error - 객체는 태그명으로 사용할 수 없음
expectError(tree({}));

// ensureMeta 함수 타입 테스트
// 올바른 반환 타입 확인
const div = document.createElement("div");
expectType<ElementMeta>(ensureMeta(div));

// 잘못된 인자 타입 테스트
// @ts-expect-error - Element가 아닌 값은 허용되지 않음
expectError(ensureMeta("string"));

// @ts-expect-error - null은 허용되지 않음
expectError(ensureMeta(null));

// 메타데이터 속성 접근 테스트
const meta = ensureMeta(div);
// meta에 속성을 추가하고 타입 체크
meta.mounted = true;
expectType<boolean>(meta.mounted!);

meta.listeners = {};
expectType<Record<string, any>>(meta.listeners!);
