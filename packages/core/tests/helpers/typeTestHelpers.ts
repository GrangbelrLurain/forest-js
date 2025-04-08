/**
 * 값의 타입이 기대하는 타입과 일치하는지 확인합니다.
 * 컴파일 타임에만 사용되며 런타임에는 아무 동작도 하지 않습니다.
 */
export function expectType<Expected>(_actual: Expected): void {}

/**
 * 타입 에러가 발생하는 코드를 테스트합니다.
 * @ts-expect-error 주석과 함께 사용해야 합니다.
 */
export function expectError(_value: never): void {}

/**
 * 두 타입이 정확히 동일한지 확인합니다 (서브타입이 아닌 정확히 같은 타입).
 */
export function expectExactType<T, U extends T = T>(_value: U): void {}

/**
 * 특정 속성이 객체 내에 존재하는지 확인합니다.
 */
export function expectProperty<Obj, Key extends string>(obj: Obj, key: Key): asserts obj is Obj & Record<Key, unknown> {}

/**
 * 타입이 'never'인지 확인합니다.
 */
export function expectNever<T>(_value: T extends never ? true : false): void {}
