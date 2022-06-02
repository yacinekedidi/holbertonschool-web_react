import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

it("test getFullYear", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

it("test getFooterCopy(true)", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

it("test getFooterCopy(false)", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

it("test getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
