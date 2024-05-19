const fetchAllMasterMenuService = require("../src/services/master/menu/fetchMasterMenuService");
const MasterMenu = require("../src/models/menu");
const MasterMenuCategory = require("../src/models/masterMenuCategories");

describe("fetchAllMasterMenuService", () => {
  it("should fetch all master menus", async () => {
    const mockFindAll = jest.spyOn(MasterMenu, "findAll");
    mockFindAll.mockResolvedValue([
      {
        id: 1,
        category_id: 1,
        name: "Menu 1",
        price: 10000,
        MasterMenuCategory: { id: 1, name: "Food" },
      },
      {
        id: 2,
        category_id: 2,
        name: "Menu 2",
        price: 20000,
        MasterMenuCategory: { id: 2, name: "Drink" },
      },
    ]);

    const result = await fetchAllMasterMenuService();

    expect(result).toEqual([
      {
        id: 1,
        category_id: 1,
        name: "Menu 1",
        price: 10000,
        MasterMenuCategory: { id: 1, name: "Food" },
      },
      {
        id: 2,
        category_id: 2,
        name: "Menu 2",
        price: 20000,
        MasterMenuCategory: { id: 2, name: "Drink" },
      },
    ]);

    expect(mockFindAll).toHaveBeenCalledWith({
      attributes: ["id", "category_id", "name", "price"],
      where: { deletedAt: null },
      include: {
        model: MasterMenuCategory,
        required: true,
        attributes: ["id", "name"],
      },
    });

    mockFindAll.mockRestore();
  });
});
