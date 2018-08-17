import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("haha", () => {
  it("trytry", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("222", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-id"
        }
      )
    ).toEqual({
      userId: "some-id",
      token: "some-token",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
