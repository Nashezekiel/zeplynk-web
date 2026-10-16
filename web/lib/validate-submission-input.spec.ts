import { describe, it, expect } from "vitest";
import {
    isHoneypotFilled,
    validateAttachment,
    validateContactInput,
    validateNewsletterInput,
    validateRegistrationInput,
} from "./validate-submission-input";

describe("validateContactInput", () => {
    const valid = { name: "Ada", email: "ada@example.com", subject: "Project Inquiry", message: "I need a new website." };

    it("accepts a complete message and trims fields", () => {
        expect(validateContactInput({ ...valid, name: "  Ada  " })).toEqual({ input: { ...valid, name: "Ada" } });
    });

    it("defaults the subject when it is missing", () => {
        const result = validateContactInput({ ...valid, subject: "" });
        expect("input" in result && result.input.subject).toBe("General Inquiry");
    });

    it("rejects a missing name, bad email or short message", () => {
        expect(validateContactInput({ ...valid, name: " " })).toHaveProperty("error");
        expect(validateContactInput({ ...valid, email: "not-an-email" })).toHaveProperty("error");
        expect(validateContactInput({ ...valid, message: "hi" })).toHaveProperty("error");
    });

    it("rejects a non-object body", () => {
        expect(validateContactInput(null)).toHaveProperty("error");
    });
});

describe("validateRegistrationInput", () => {
    const valid = { name: "Ada", email: "ada@example.com", phone: "0706 369 5334", courseInterest: "AI Engineering" };

    it("accepts a complete registration and drops an empty note", () => {
        expect(validateRegistrationInput({ ...valid, additionalNote: "" })).toEqual({
            input: { ...valid, message: undefined },
        });
    });

    it("rejects an invalid phone number or missing course", () => {
        expect(validateRegistrationInput({ ...valid, phone: "12" })).toHaveProperty("error");
        expect(validateRegistrationInput({ ...valid, courseInterest: "" })).toHaveProperty("error");
    });
});

describe("validateNewsletterInput", () => {
    it("lowercases the email", () => {
        expect(validateNewsletterInput({ email: " Ada@Example.com ", source: "homepage" })).toEqual({
            input: { email: "ada@example.com", source: "homepage" },
        });
    });

    it("rejects an invalid email", () => {
        expect(validateNewsletterInput({ email: "ada" })).toHaveProperty("error");
    });
});

describe("validateAttachment", () => {
    it("accepts images and PDFs under 5MB", () => {
        expect(validateAttachment(new File(["x"], "proof.pdf", { type: "application/pdf" }))).toBeNull();
    });

    it("rejects other file types", () => {
        expect(validateAttachment(new File(["x"], "proof.exe", { type: "application/x-msdownload" }))).not.toBeNull();
    });

    it("rejects files over 5MB", () => {
        const big = new File([new Uint8Array(5 * 1024 * 1024 + 1)], "big.png", { type: "image/png" });
        expect(validateAttachment(big)).not.toBeNull();
    });
});

describe("isHoneypotFilled", () => {
    it("flags any non-empty value", () => {
        expect(isHoneypotFilled("http://spam.example")).toBe(true);
        expect(isHoneypotFilled("")).toBe(false);
        expect(isHoneypotFilled(undefined)).toBe(false);
    });
});
