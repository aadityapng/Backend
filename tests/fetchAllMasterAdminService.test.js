const fetchAllMasterAdminService = require("../src/services/master/admin/fetchAllMasterAdminService");
const MasterAdmin = require("../src/models/admin");

describe("fetchAllMasterAdminService", () => {
  it("should fetch all master admins", async () => {
    const mockFindAll = jest.spyOn(MasterAdmin, "findAll");
    mockFindAll.mockResolvedValue([
      { id: 1, name: "Admin 1", username: "admin1", role_id: 1 },
      { id: 2, name: "Admin 2", username: "admin2", role_id: 2 },
    ]);

    const result = await fetchAllMasterAdminService();

    expect(result).toEqual([
      { id: 1, name: "Admin 1", username: "admin1", role_id: 1 },
      { id: 2, name: "Admin 2", username: "admin2", role_id: 2 },
    ]);

    expect(mockFindAll).toHaveBeenCalledWith({
      attributes: ["id", "name", "username", "role_id"],
      where: { deleted_at: null },
    });

    mockFindAll.mockRestore();
  });
});
