import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import tabList from "./data/tabs.json";
import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBarsCombined from "./AppBArCombined";
import SpreadSheet from "./SpreadSheet";
import FormulaBar from "./FormulaBar";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    height: "50px",
    width: "100%",
    backgroundColor: "grey",
    // borderRadius: "10px 10px ",
    borderTopRightRadius: "10px 10px",
  },
  arrow: {
    borderColor: "transparent transparent #FFF #FFF",
    // borderStyle: "solid",
    border: "2px solid red",
    borderRadius: "100px",
    // borderWidth: " 23px 23px 23px 23px",
    // height: "0",
    // width: "0",
    // position: "absolute",
    // bottom: "0px",
    // right: "-43px",
    // left: "-43px",
  },
  root: {
    flexGrow: 1,
    borderTop: "solid",
    borderTopWidth: "thin",
  },
  bg: {
    backgroundColor: "white",
    color: "black",
  },
  tab: {
    backgroundColor: "white",
    borderRadius: "10px 10px 0px 0px",
  },
  add: {
    color: "black",
    marginLeft: "60px",
    marginTop: "12px",
  },
  panel: {
    backgroundColor: "grey",
  },
  bg1: {
    marginLeft: "128px",
    marginBottom: "-20px !important",
    backgroundColor: "white",
    color: "black",
    fontSize: "15px",
  },
}));

interface tabProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface tab {
  id: number;
  value: number;
  tabLabel: String;
}
function TabPanel(props: tabProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabs, settabs] = React.useState<tab[]>(tabList);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.bg}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabs.map((tab) => (
            <Tab
              className={classes.panel}
              label={
                tab.tabLabel.length > 10
                  ? tab.tabLabel.slice(0, 10) + "..."
                  : tab.tabLabel
              }
              icon={
                <CloseIcon
                  className={classes.bg1}
                  onClick={() => removeTab(tab.id)}
                />
              }
            ></Tab>
          ))}
          <AddBoxTwoToneIcon className={classes.add} onClick={addTab} />
        </Tabs>

        <AppBarsCombined></AppBarsCombined>
      </div>

      <div>
        <FormulaBar></FormulaBar>
      </div>
      <SpreadSheet />
      <TabPanel value={value} key={value} index={value}></TabPanel>
    </div>
  );

  function removeTab(ID: number) {
    const newList = tabs.filter((tab) => tab.id !== ID);
    settabs(newList);
  }
  function addTab() {
    settabs([
      ...tabs,
      { id: tabs.length + 1, value: tabs.length + 1, tabLabel: "NEW TAB" },
    ]);
  }
}
