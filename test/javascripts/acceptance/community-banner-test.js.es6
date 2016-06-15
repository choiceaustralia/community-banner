import { acceptance } from "helpers/qunit-helpers";
acceptance("hello");

test("hello", () => {
  visit("/");

  andThen(() => {
    ok(exists('#top-navbar'), "this should not exist");
  });
});
