import { TestService } from "../../services/index.js";
export const testController = async (req, res, next) => {
  try {
    const { testData } = req;
    const response = await TestService.testService(testData);
    res.status(200).json({ data: "testing" });
  } catch (error) {
    res.status(500).json({ message: "INTERNEL SERVER ERROR" });
  }
};
