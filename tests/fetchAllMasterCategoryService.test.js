const fetchAllMasterMenuService = require("../src/services/master/menu/fetchMasterMenuService");
const MasterMenu = require("../src/models/menu");

describe("fetchAllMasterMenuService", () => {
  it("should fetch all master menus", async () => {
    const mockFindAll = jest.spyOn(MasterMenu, "findAll");
    mockFindAll.mockResolvedValue([
      { id: 1, category_id: 1, name: "Menu 1", price: 10000 },
      { id: 2, category_id: 2, name: "Menu 2", price: 20000 },
    ]);

    const result = await fetchAllMasterMenuService();

    expect(result).toEqual([
      { id: 1, category_id: 1, name: "Menu 1", price: 10000 },
      { id: 2, category_id: 2, name: "Menu 2", price: 20000 },
    ]);

    expect(mockFindAll).toHaveBeenCalledWith({
      attributes: ["id", "category_id", "name", "price"],
      where: { deletedAt: null },
    });

    mockFindAll.mockRestore();
  });
});
