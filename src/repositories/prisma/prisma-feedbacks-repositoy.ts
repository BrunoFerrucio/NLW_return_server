// Aqui realmente executa as operações de CRUD

import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackCreateData } from "../feedbacks-repositoy";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot,
      }
    });
  }
}