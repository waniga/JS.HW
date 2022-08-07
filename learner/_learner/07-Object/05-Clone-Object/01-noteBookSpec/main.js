ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign



const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

//วิธีที่ 1
const cloneNotebook = {}
for (let key in notebook) {
    cloneNotebook[key] = notebook[key];


//วิธีที่ 2
const cloneNotebook = Object.assign({},notebook)

    console.log(notebook)
    console.log(cloneNotebook)


   
