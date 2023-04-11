const {getCategories}  = require('../../src/database/queries/categories');
const { dbBuild } = require("../../src/database/config/build");
const connection= require('../../src/database/config/connection');
beforeAll(()=>{
    return dbBuild();
  });
  afterAll(()=>{
    return connection.end();
  });
  
  describe('test categories query',()=>{
    test('should return all the ten categories',()=>{
      getCategories()
       .then((data) => data.rows)
      .then((rows) => {
        const [obj1, obj2,] = rows;
        expect(Array.isArray(rows)).toBe(true);
        
        expect(Array.isArray(rows)).toBe(true);
        expect(obj1.id).toBe(1);
        expect(obj2.id).toBe(2);
        expect(obj1.quantity).toBe(1);
        expect(obj1.name).toBe('chocolate');
        expect(obj2.name).toBe('Mint');
      })
      .catch((err) => console.log(err));
    });

  })