import React from "react";
import { SpreadSheets, Worksheet } from "@grapecity/spread-sheets-react";
import { IO } from "@grapecity/spread-excelio";
import { data } from "./data/spreadJson.js";
import GC from "@grapecity/spread-sheets";

const SheetArea = GC.Spread.Sheets.SheetArea;
let spread = null;

function SpreadSheet() {
  let hostStyles: any = { width: "100%", height: "600px" };
  return (
    <div>
      <SpreadSheets
        hostStyle={hostStyles}
        workbookInitialized={(spread) => initSpread(spread)}
      >
        <Worksheet></Worksheet>
      </SpreadSheets>
    </div>
  );
}
function initSpread(spread_local: any) {
  spread = spread_local;
  spread.options.calcOnDemand = true;
  let sheet = spread.getActiveSheet();
  console.log(sheet);

  sheet.setRowCount(2, SheetArea.colHeader);
  sheet.setColumnCount(0, SheetArea.rowHeader);

  sheet.setRowCount(4);
  sheet.setColumnCount(10);

  sheet.addSpan(1, 1, 1, 3, SheetArea.colHeader);
  sheet.addSpan(1, 4, 1, 3, SheetArea.colHeader);

  var cell = sheet.getCell(1, 4, SheetArea.colHeader);
  cell.backColor("grey");
  cell.hAlign(GC.Spread.Sheets.HorizontalAlign.left);
  cell.textIndent(2);
  cell = sheet.getCell(1, 0, SheetArea.colHeader);
  cell.hAlign(GC.Spread.Sheets.HorizontalAlign.left);
  cell.textIndent(2);
  sheet.setDataSource(data);
  sheet.getRange(-2, 0, 5, 4).width(200);
  sheet.getRange(-2, 4, 5, 3).width(150);
  console.log(sheet);
  let sheetCount: number = sheet.getRowCount();
  console.log(sheetCount);
  sheet.bind(GC.Spread.Sheets.Events.CellClick, function (e: any, args: any) {
    args.sheet.addRows(args.sheet.getRowCount() + 1, 1);
  });
}

export default SpreadSheet;
