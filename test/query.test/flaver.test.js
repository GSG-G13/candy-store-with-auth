const {getFlavers}  = require('../../src/database/queries/flavors');
const { dbBuild } = require("../../src/database/config/build");
const connection= require('../../src/database/config/connection');
beforeAll(()=>{
    return dbBuild();
  });
  afterAll(()=>{
    return connection.end();
  });
  
  describe('test flavor query',()=>{
    test('should return all the ten flavors',()=>{
      getFlavers()
       .then((data) => data.rows)
      .then((rows) => {
        const [obj1, obj2,] = rows;
        expect(Array.isArray(rows)).toBe(true);
         expect(obj1.id).toBe(1);
         expect(obj2.id).toBe(2);
         expect(obj1.quantity).toBe(1);
         expect(obj1.name).toBe('jilly');
         expect(obj2.name).toBe('hard candy');
      })
      .catch((err) => console.log(err));
    });

  })