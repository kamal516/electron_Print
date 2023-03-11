const { app, BrowserWindow } = require('electron')
// Module with utilities for working with file and directory paths.
const path = require('path')
// Module with utilities for URL resolution and parsing.
const url = require('url')
var util = require('util').format
const escpos = require('escpos')
const Network = require('escpos-network')
const https = require('https')
var fs = require('fs'),
  request = require('request')

const options = {
  encoding: 'ISO-8859-1',
  encoding: 'GB18030',
  encoding: 'UTF-8',
}
// const networkDevice = new Network('192.168.0.114', 9100)

// const printer = new escpos.Printer(networkDevice, options)


let mainWindow

// Deep linked url
let deeplinkingUrl



function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show:false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  )

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Protocol handler for win32
  if (process.platform == 'win32') {
    // Keep only command line / deep linked arguments
    deeplinkingUrl = process.argv.slice(1)
  }
  // <a href="tdp://printdata.html"><click me</a>
    deeplinkingUrl = 'tdp://printdata.html'

    logEverywhere('createWindowqqq# ' + deeplinkingUrl)
    logEverywhere(String(deeplinkingUrl))
    // logEverywhere('hello'.replace('o', ''))
    logEverywhere(deeplinkingUrl)
    deeplinkingUrl = String(deeplinkingUrl)
    .replace('tdp://', '')
    .replace('/', '')

    var api ='https://techsapphire.net/wp-content/uploads/2022/04/' + deeplinkingUrl

    logEverywhere(api);

    const mainapi = api;

 https.get(mainapi, (res) => {
   let data = ''
   res.on('data', (chunk) => {
     data += chunk
   })
   res
     .on('end', () => {
       data = JSON.parse(data)

       var list1 = data
      console.log(list1);

       // var star = JSON.stringify(list1.printer_name)
       console.log(list1.printer_name.toString())
       const networkDevice = new Network("192.168.1.5", 9100);
      //  const networkDevice = new Network(list1.printer_name.toString(), 9100)
      const obj2=[{
printer_name: [
        "posprint"
      ],
      item_length: "35",
      template: "1",
      data: [
        {
          type: "logo",
          data: {
            url: "https://irestoraplus.easypos4u.com/assets/POS/logo/8dd65852f2b8cc43268acfff027ca51f.jpg"
          }
        },
        {
          type: "kitchenlogo",
          data: {
            url: "",
            y_axis: 10,
            x_axis: 10,
            logo_width: 150,
            logo_height: 100
          }
        },
        {
          type: "header",
          data: {
            top_title: "Morya Restaurant",
            sub_titles: [
              "Pune",
              "8600619880",
              "Takeaway"
            ],
            address: [
              "Pune"
            ],
            bill_no: "",
            ticket_no: "",
            date_of_bill: "",
            prepration_date: "",
            time: "11:12",
            print: "",
            table: "",
            online_order_id: "",
            employee: "",
            till: "",
            order_type: "",
            customer_name: "",
            customer_phone: "",
            customer_address: [],
            customer_remarks: [],
            split_bill_string: "",
            headercomments: []
          }
        },
        {
          type: "kitchenfooter",
          data: {
            align: "center",
            kitchen_footer_text: [
              "",
              "Pune"
            ]
          }
        },
        {
          type: "kitchenfooter",
          data: {
            align: "center",
            kitchen_footer_text: [
              "",
              "8600619880",
              "Takeaway"
            ]
          }
        },
        {
          type: "footer",
          data: {
            align: "left",
            footer_text: [
              "Invoice/Bill No: M001-T-000140",
              "Customer Name: Kundan",
              "Phone No: 8600610023",
              "Cust Address:Pune",
              "Sales Ast: Ankush Patil",
              "Date: 15/10/2022 11:12"
            ]
          }
        },
        {
          type: "separator",
          data: {
            separator_length: ""
          }
        },
        {
          type: "item",
          data: {
            itemdata: [
              {
                0: false,
                item_amount: "5.00",
                item_name: "Maggie (002)",
                item_subLine: "",
                toppings_with_price: [],
                toppings: [],
                quantity: "1",
                selected: false,
                price: "0.00",
                items: [],
                custpmer_remarks: "",
                printer_name: "",
                printer_label: "",
                station: "",
                deleted: false,
                exists: false,
                display_index: "0",
                is_printed: false,
                made_to: false,
                menu_group: "",
                kitchen_print: false
              }
            ]
          }
        },
        {
          type: "separator",
          data: {
            separator_length: ""
          }
        },
        {
          type: "bigsummary",
          data: {
            bigsummary: [
              {
                key: "Total Item(s):1",
                value: "",
                fontwidth: "1"
              },
              {
                key: "Subtotal",
                value: "5.00",
                fontwidth: "1"
              },
              {
                key: "Discount Amount",
                value: "0.00",
                fontwidth: "1"
              },
              {
                key: "Tip/Delivery Charge",
                value: "0.00",
                fontwidth: "1"
              },
              {
                key: "Deposit",
                value: "0.00",
                fontwidth: "1"
              },
              {
                key: "Grand Total",
                value: "5.00",
                fontwidth: "1"
              },
              {
                key: "Paid Amount",
                value: "0.00",
                fontwidth: "1"
              },
              {
                key: "Due Amount",
                value: "0.00",
                fontwidth: "1"
              }
            ]
          }
        },
        {
          type: "separator",
          data: {
            separator_length: ""
          }
        },
        {
          type: "summary",
          data: {
            summary: [
              {
                key: "Subtotal",
                value: "5.00"
              }
            ]
          }
        },
        {
          type: "setting",
          data: {
            printer_name: [
              "80mm Series Printer (Copy 1)"
            ],
            print_type: "",
            item_length: 30,
            print_logo: false,
            thankyou_note: "",
            thankyou_note2: "",
            printer_type: "POS"
          }
        },
        {
          type: "columndetails",
          data: {
            columnheader: {
              column1: "Remark",
              column2: "",
              column3: "",
              column4: "testing done on 15/10/2022"
            },
            columndata: [
              {
                column1: "",
                column2: "",
                column3: "",
                column4: ""
              }
            ]
          }
        },
        {
          type: "Receipt",
          data: {
            receipt_text: [
              "Payment Type : Cash"
            ]
          }
        },
        {
          type: "logo",
          data: {
            url: "https://irestoraplus.easypos4u.com/assets/POS/logo/80c39151180417cd5c04bab2f11a9344.jpg"
          }
        },
        {
          type: "footer",
          data: {
            align: "left",
            footer_text: [
              ""
            ]
          }
        },
        {
          type: "separator",
          data: {
            separator_length: ""
          }
        },
        {
          type: "kitchenfooter",
          data: {
            align: "left",
            kitchen_footer_text: []
          }
        },
        {
          type: "kitchenfooter",
          data: {
            align: "center",
            kitchen_footer_text: []
          }
        },
        {
          type: "kitchenfooter",
          data: {
            align: "right",
            kitchen_footer_text: []
          }
        },
        {
          type: "kitchen_print",
          printer_name: "80mm 114",
          individual_print: "0",
          data: {
            itemdata: [
              {
                item_amount: "5.00",
                item_name: "Maggie ",
                item_subLine: "",
                toppings_with_price: [],
                toppings: [],
                quantity: "1",
                selected: false,
                price: "44.99",
                custpmer_remarks: "Testtng",
                printer_name: "80mm 114",
                printer_label: "Testtng 3",
                station: "",
                food_stampable: "yes",
                items: [],
                print_description: "",
                deleted: false,
                exists: false,
                display_index: "0",
                is_printed: false,
                made_to: false,
                menu_group: "Combo~10",
                kitchen_print: false
              }
            ]
          }
        }
      ]
 }
    ]
       const printer = new escpos.Printer(networkDevice, options)
       for (let z = 0; z < obj2.length; z++) {
         let dataAr = list1.data[z]
         let ldata = dataAr.type
         let datag = dataAr.data
        //  if (ldata == 'logo') {
        //    let datag = dataAr.data
        //    var download = function (uri, filename, callback) {
        //      request.head(uri, function (err, res, body) {
        //        console.log('content-type:', res.headers['content-type'])
        //        console.log('content-length:', res.headers['content-length'])

        //        request(uri)
        //          .pipe(fs.createWriteStream(filename))
        //          .on('close', callback)
        //      })
        //    }
        //    download(datag.url.toString(), 'logo.png', function () {
        //      console.log('done')
        //    })
        //    // let logo = datag.url;

         
        //  }
          escpos.Image.load(datag.url, function (image) {
             networkDevice.open(function (error) {
                printer.align('ct').image(image, 's8')
                for (let i = 0; i < list1.data.length; i++) {
                  // console.log(list.data.length);
                  // printer.text(util(list.data.length));
                  let dataAr = list1.data[i]
                  // console.log(dataAr.type);
                  if (dataAr.type == 'header') {
                    let data1 = dataAr.data
                    printer.size(1, 1)
                    printer.align('ct')
                    printer.text(util(data1.top_title))
                    printer.text(util(data1.sub_titles[0]))
                    printer.text(util(data1.sub_titles[1]))
                    printer.size(0, 0)
                    printer.drawLine()
                    printer.align('lt')

                    printer.text(
                      util('Bill No.:'.padEnd(41), data1.bill_no)
                    )
                    printer.text(
                      util('Date :'.padEnd(38), data1.date_of_bill)
                    )
                    printer.text(
                      util('Employee :'.padEnd(40), data1.employee)
                    )
                    printer.text(util('Terminal :'.padEnd(36), data1.till))
                    printer.drawLine()
                  }

                  let bdata = dataAr.type
                  if (bdata == 'summary') {
                    let data2 = dataAr.data
                    let getsummary = data2.summary
                    //printer.text(util(getsummary.key, getsummary.value));
                  }

                  let cdata = dataAr.type
                  if (cdata == 'item') {
                    printer.size(1, 0)
                    printer.text('Selected Items')
                    printer.size(0, 0)
                    let data3 = dataAr.data
                    for (let k = 0; k < data3.itemdata.length; k++) {
                      // let data4 = data3.itemdata;

                      printer.text(
                        util(
                          data3.itemdata[k].quantity,
                          'X',
                          data3.itemdata[k].item_name
                        )
                      )

                      printer.align('rt')
                      printer.text(util(data3.itemdata[k].price))

                      printer.align('lt')
                      let tops = data3.itemdata[k].toppings
                      for (
                        let t = 0;
                        t < data3.itemdata[k].toppings.length;
                        t++
                      ) {
                        printer.text(util(' ', 'x', tops[t]))
                      }
                      let inner = data3.itemdata[k].items
                      for (let y = 0; y < inner.length; y++) {
                        printer.text(
                          util(inner[y].quantity, 'X', inner[y].item_name)
                        )
                        printer.align('rt')
                        printer.text(util(inner[y].price))
                        printer.align('lt')
                        let tops2 = inner[y].toppings
                        for (
                          let u = 0;
                          u < inner[y].toppings.length;
                          u++
                        ) {
                          printer.text(util(' ', 'x', tops2[u]))
                        }
                      }
                    }
                    printer.drawLine()
                  }

                  let ddata = dataAr.type
                  if (ddata == 'bigsummary') {
                    let data4 = dataAr.data
                    for (let l = 0; l < data4.bigsummary.length; l++) {
                      // let data4 = data3.itemdata;

                      printer.text(util(data4.bigsummary[l].key))
                      printer.align('RT')
                      printer.text(util(data4.bigsummary[l].value))
                      printer.align('LT')
                    }
                    printer.drawLine()
                  }

                  let edata = dataAr.type
                  if (edata == 'columndetails') {
                    // let a = "               "; //(8tabs)
                    let data5 = dataAr.data.columnheader
                    printer.text(
                      util(
                        data5.column1,
                        ''.padEnd(15),
                        data5.column2,
                        ''.padEnd(15),
                        data5.column4
                      )
                    )

                    let data6 = dataAr.data
                    for (let m = 0; m < data6.columndata.length; m++) {
                      printer.text(
                        util(
                          data6.columndata[m].column1,
                          ''.padEnd(15),
                          data6.columndata[m].column2,
                          ''.padEnd(15),
                          data6.columndata[m].column4
                        )
                      )
                    }
                    printer.drawLine()
                  }

                  printer.align('CT')
                  let fdata = dataAr.type
                  if (fdata == 'footer') {
                    let data7 = dataAr.data
                    //printer.text(util(data7.footer_text));
                    for (let n = 0; n < data7.footer_text.length; n++) {
                      printer.text(util(data7.footer_text[n]))
                    }
                    printer.drawLine()
                  }

                  printer.align('LT')
                }
                printer.feed(3)
                printer.cut()
                printer.close()
                app.exit(0)
              //  https
              //    .get(mainapi, (res) => {
              //      let data = ''
              //      res.on('data', (chunk) => {
              //        data += chunk
              //      })
              //      res.on('end', () => {
              //        data = JSON.parse(data)
              //        // console.log(data);
              //        var list = data
              //        // console.log(list);

                    
              //      })
              //    })
              //    .on('error', (err) => {
              //      console.log(err.message)
              //    })
             })
           })
       }
     })
     .on('error', () => {
       app.exit(0)
     })
 })



  
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

if (!app.isDefaultProtocolClient('tdp')) {
  // Define custom protocol handler. Deep linking works on packaged versions of the application!
  app.setAsDefaultProtocolClient('tdp')
}

app.on('will-finish-launching', function () {
  // Protocol handler for osx
  app.on('open-url', function (event, url) {
    event.preventDefault()
    
//     let deeplinkingUrl = url
//     logEverywhere('open-url# ' + deeplinkingUrl)
//     logEverywhere('createWindow# ' + deeplinkingUrl)

//  logEverywhere('createWindowqqq# ' + deeplinkingUrl)
//  logEverywhere(String(deeplinkingUrl))
//  // logEverywhere('hello'.replace('o', ''))
//  logEverywhere(deeplinkingUrl)
//  deeplinkingUrl = String(deeplinkingUrl).replace('tdp://', '').replace('/', '')
//  var api =
//    'https://techsapphire.net/wp-content/uploads/2022/04/' + deeplinkingUrl

//  logEverywhere(api)

//  const mainapi = api

//   https.get(mainapi, (res) => {
//     let data = ''
//     res.on('data', (chunk) => {
//       data += chunk
//     })
//     res
//       .on('end', () => {
//         data = JSON.parse(data)

//         var list1 = data
//         // console.log(list);

//         // var star = JSON.stringify(list1.printer_name)
//         console.log(list1.printer_name.toString())
//         const networkDevice = new Network(list1.printer_name.toString(), 9100)

//         const printer = new escpos.Printer(networkDevice, options)
//         for (let z = 0; z < list1.data.length; z++) {
//           let dataAr = list1.data[z]
//           let ldata = dataAr.type

//           if (ldata == 'logo') {
//             let datag = dataAr.data
//             var download = function (uri, filename, callback) {
//               request.head(uri, function (err, res, body) {
//                 console.log('content-type:', res.headers['content-type'])
//                 console.log('content-length:', res.headers['content-length'])

//                 request(uri)
//                   .pipe(fs.createWriteStream(filename))
//                   .on('close', callback)
//               })
//             }
//             download(datag.url.toString(), 'logo.png', function () {
//               console.log('done')
//             })
//             // let logo = datag.url;

//             escpos.Image.load(datag.url, function (image) {
//               networkDevice.open(function (error) {
//                 printer.align('ct').image(image, 's8')

//                 https
//                   .get(mainapi, (res) => {
//                     let data = ''
//                     res.on('data', (chunk) => {
//                       data += chunk
//                     })
//                     res.on('end', () => {
//                       data = JSON.parse(data)
//                       // console.log(data);
//                       var list = data
//                       // console.log(list);

//                       for (let i = 0; i < list.data.length; i++) {
//                         // console.log(list.data.length);
//                         // printer.text(util(list.data.length));
//                         let dataAr = list.data[i]
//                         // console.log(dataAr.type);
//                         if (dataAr.type == 'header') {
//                           let data1 = dataAr.data
//                           printer.size(1, 1)
//                           printer.align('ct')
//                           printer.text(util(data1.top_title))
//                           printer.text(util(data1.sub_titles[0]))
//                           printer.text(util(data1.sub_titles[1]))
//                           printer.size(0, 0)
//                           printer.drawLine()
//                           printer.align('lt')

//                           printer.text(
//                             util('Bill No.:'.padEnd(41), data1.bill_no)
//                           )
//                           printer.text(
//                             util('Date :'.padEnd(38), data1.date_of_bill)
//                           )
//                           printer.text(
//                             util('Employee :'.padEnd(40), data1.employee)
//                           )
//                           printer.text(
//                             util('Terminal :'.padEnd(36), data1.till)
//                           )
//                           printer.drawLine()
//                         }

//                         let bdata = dataAr.type
//                         if (bdata == 'summary') {
//                           let data2 = dataAr.data
//                           let getsummary = data2.summary
//                           //printer.text(util(getsummary.key, getsummary.value));
//                         }

//                         let cdata = dataAr.type
//                         if (cdata == 'item') {
//                           printer.size(1, 0)
//                           printer.text('Selected Items')
//                           printer.size(0, 0)
//                           let data3 = dataAr.data
//                           for (let k = 0; k < data3.itemdata.length; k++) {
//                             // let data4 = data3.itemdata;

//                             printer.text(
//                               util(
//                                 data3.itemdata[k].quantity,
//                                 'X',
//                                 data3.itemdata[k].item_name
//                               )
//                             )

//                             printer.align('rt')
//                             printer.text(util(data3.itemdata[k].price))

//                             printer.align('lt')
//                             let tops = data3.itemdata[k].toppings
//                             for (
//                               let t = 0;
//                               t < data3.itemdata[k].toppings.length;
//                               t++
//                             ) {
//                               printer.text(util(' ', 'x', tops[t]))
//                             }
//                             let inner = data3.itemdata[k].items
//                             for (let y = 0; y < inner.length; y++) {
//                               printer.text(
//                                 util(inner[y].quantity, 'X', inner[y].item_name)
//                               )
//                               printer.align('rt')
//                               printer.text(util(inner[y].price))
//                               printer.align('lt')
//                               let tops2 = inner[y].toppings
//                               for (
//                                 let u = 0;
//                                 u < inner[y].toppings.length;
//                                 u++
//                               ) {
//                                 printer.text(util(' ', 'x', tops2[u]))
//                               }
//                             }
//                           }
//                           printer.drawLine()
//                         }

//                         let ddata = dataAr.type
//                         if (ddata == 'bigsummary') {
//                           let data4 = dataAr.data
//                           for (let l = 0; l < data4.bigsummary.length; l++) {
//                             // let data4 = data3.itemdata;

//                             printer.text(util(data4.bigsummary[l].key))
//                             printer.align('RT')
//                             printer.text(util(data4.bigsummary[l].value))
//                             printer.align('LT')
//                           }
//                           printer.drawLine()
//                         }

//                         let edata = dataAr.type
//                         if (edata == 'columndetails') {
//                           // let a = "               "; //(8tabs)
//                           let data5 = dataAr.data.columnheader
//                           printer.text(
//                             util(
//                               data5.column1,
//                               ''.padEnd(15),
//                               data5.column2,
//                               ''.padEnd(15),
//                               data5.column4
//                             )
//                           )

//                           let data6 = dataAr.data
//                           for (let m = 0; m < data6.columndata.length; m++) {
//                             printer.text(
//                               util(
//                                 data6.columndata[m].column1,
//                                 ''.padEnd(15),
//                                 data6.columndata[m].column2,
//                                 ''.padEnd(15),
//                                 data6.columndata[m].column4
//                               )
//                             )
//                           }
//                           printer.drawLine()
//                         }

//                         printer.align('CT')
//                         let fdata = dataAr.type
//                         if (fdata == 'footer') {
//                           let data7 = dataAr.data
//                           //printer.text(util(data7.footer_text));
//                           for (let n = 0; n < data7.footer_text.length; n++) {
//                             printer.text(util(data7.footer_text[n]))
//                           }
//                           printer.drawLine()
//                         }

//                         printer.align('LT')
//                       }
//                       printer.feed(3)
//                       printer.cut()
//                       printer.close()
//                       app.exit(0)
//                     })
//                   })
//                   .on('error', (err) => {
//                     console.log(err.message)
//                   })
//               })
//             })
//           }
//         }
//       })
//       .on('error', () => {
//         app.exit(0)
//       })
//   })

  })
})

// Log both at dev console and at running node console instance
function logEverywhere(s) {
  console.log(s)
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript(`console.log("${s}")`)
  }
}
