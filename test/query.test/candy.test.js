const {getCandy,addCandy}  = require('../../src/database/queries/candy');
const { dbBuild } = require("../../src/database/config/build");
const connection= require('../../src/database/config/connection');
beforeAll(()=>{
    return dbBuild();
  });
  afterAll(()=>{
    return connection.end();
  });
  describe('test get all candy query',()=>{
    test('should return all the candy in success state',()=>{
      getCandy()
       .then((data) => data.rows)
      .then((rows) => {
        const [obj1, obj2, obj3] = rows; 
        expect(Array.isArray(rows)).toBe(true);
        expect(obj1).toEqual({id:1,name:"candy1",quantity:1,img_url:"test1",category_id:1,flavor_id:1});
        expect(obj2).toEqual({id:2,name:"candy2",quantity:2,img_url:"test2",category_id:2,flavor_id:2});
        expect(obj3).toEqual({id:3,name:"candy3",quantity:3,img_url:"test3",category_id:3,flavor_id:3});
      })
      .catch((error) => console.log(error));
    });
  });
  describe('test add candy query',()=>{
    test('should add candy in success state and return count 1',()=>{
      addCandy({name:"candy7",quantity:1,img_url:"test7",category_id:7,flavor_id:7})
      .then(({ rowCount, rows }) => ({ count: rowCount, rows }))
      .then(({ count, rows }) => {
        expect(Array.isArray(rows)).toBe(true);
        expect(count).toBe(1);
        expect(rows[0].name).toBe('candy7');
        expect(rows[0].quantity).toBe(1);
      })
      .catch((err) => console.log(err));
  });
  });
