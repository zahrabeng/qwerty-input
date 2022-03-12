import hasStrongInput from "./hasStrongInput";

test("hasStrongInput identifies whether the input is strong enough following certain conditions",() => {
    expect(hasStrongInput("hello")).toBe(false)
    expect(hasStrongInput("Cheepe$t")). toBe(false)
    expect(hasStrongInput("ToRNaDo!!")).toBe(true)
    expect(hasStrongInput("?wHOisThis1")).toBe(true)
    expect(hasStrongInput("##heLLoooO")).toBe(true)
    expect(hasStrongInput("###")).toBe(false)
    expect(hasStrongInput("#########")).toBe(false)
    expect(hasStrongInput("Helloooooo")).toBe(false)
    }
)