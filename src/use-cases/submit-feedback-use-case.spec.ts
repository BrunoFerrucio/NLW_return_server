import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

describe('Submit feedback', () => {
  it('should be able submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "examplo comment in test",
      screenshot: "data:image/png;base64/test.jpg"
    })).resolves.not.toThrow();
  });

  it('should be able submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "examplo comment in test",
      screenshot: "data:image/png;base64/test.jpg"
    })).rejects.toThrow();
  });
  
  it('should be able submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64/test.jpg"
    })).rejects.toThrow();
  });
  
  it('should be able submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "examplo comment in test",
      screenshot: "test.jpg"
    })).rejects.toThrow();
  });
});