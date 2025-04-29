import axios from "axios"
import { NameApiService } from "../nameApiService"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("NameApiService", () => {
  let nameApiService: NameApiService

  beforeEach(() => {
    nameApiService = new NameApiService()
    jest.clearAllMocks()
  })
  it("firstNameを返す",  async () => {
    const firstName = {data: {first_name: "shun"}}
    const expectData = "shun"

    mockedAxios.get.mockResolvedValue(firstName)

    await expect(nameApiService.getFirstName()).resolves.toBe(expectData)
  })

  it("firstNameがMAX_LENGTHよりも大きいと例外を出す", async () => {
    const firstName = {data: {first_name: "isawashun"}}

    mockedAxios.get.mockResolvedValue(firstName)

    await expect(nameApiService.getFirstName()).rejects.toThrow("firstName is too long!")
  })
})
