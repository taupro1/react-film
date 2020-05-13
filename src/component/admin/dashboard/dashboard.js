import React, { useEffect } from 'react'
import Particles from "react-particles-js"
import SnowStorm from 'react-snowstorm';
import GridContainer from './gridcontainer'
import GridItem from "./gridItem"
import Card from './Card';
import CardHeader from './CardHeader'
import CardIcon from './CardIcon'
import Icon from "@material-ui/core/Icon";
import CardFooter from './CardFooter'
import Danger from './Danger'
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Accessibility from "@material-ui/icons/Accessibility";
import Update from "@material-ui/icons/Update";
import { Toolbar, FormControl, InputAdornment, Typography, Box, TextField, Tooltip, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from "./dashboardStyle";
import { makeStyles } from "@material-ui/core/styles";
import ChartistGraph from "react-chartist";
import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "./Variables";
import CardBody from './CardBody'
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import CustomTabs from "./CustomsTabs"
import BugReport from "@material-ui/icons/BugReport";
import Tasks from "./Tasks"
import { bugs, website, server } from "./VariablesGeneral";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Table from "./Table"
import * as action from "../../../redux/action/action-redux/index"
import { connect } from 'react-redux';

const useStyles = makeStyles(styles);

function Dashboard(props) {
    const classes = useStyles();
    useEffect(() => {
        return () => {
            props.editIsValidUser(true)
        }
    })
    return (
        <div id="dashboard-admin" >
            <SnowStorm />
            {/* <Particles className="bg-top-particles">
                    <div className="overplay">
                    </div>
                </Particles> */}
            <div className="overplay">
            </div>
            <div className="dashboard-bg">
                <Paper id="dashboard-search">
                    <Toolbar className="toolbar">
                        <div>
                            <Typography variant="h5">
                                <Box fontWeight="fontWeightBold">
                                    Dashboard
                                </Box>
                            </Typography>
                        </div>
                        <div className="content-form">
                            <FormControl className="item-form">
                                <TextField onChange={e => this.setState({ keyword: e.target.value })} placeholder="Search" InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Tooltip title="Search">
                                            <SearchIcon />
                                        </Tooltip>
                                    </InputAdornment>,
                                }}>
                                </TextField>
                            </FormControl>
                        </div>
                    </Toolbar>
                </Paper>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="warning">
                                    <Icon>content_copy</Icon>
                                </CardIcon>
                                <p className={classes.cardCategory}>Used Space</p>
                                <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                </h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Danger>
                                        <Warning />
                                    </Danger>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        Get more space
                </a>
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="success" stats icon>
                                <CardIcon color="success">
                                    <Store />
                                </CardIcon>
                                <p className={classes.cardCategory}>Revenue</p>
                                <h3 className={classes.cardTitle}>$34,245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <DateRange />
                Last 24 Hours
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="danger" stats icon>
                                <CardIcon color="danger">
                                    <Icon>info_outline</Icon>
                                </CardIcon>
                                <p className={classes.cardCategory}>Fixed Issues</p>
                                <h3 className={classes.cardTitle}>75</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <LocalOffer />
                Tracked from Github
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="info" stats icon>
                                <CardIcon color="info">
                                    <Accessibility />
                                </CardIcon>
                                <p className={classes.cardCategory}>Followers</p>
                                <h3 className={classes.cardTitle}>+245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Update />
                Just Updated
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="success">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={dailySalesChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Daily Sales</h4>
                                <p className={classes.cardCategory}>
                                    <span className={classes.successText}>
                                        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> updated 4 minutes ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="warning">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={emailsSubscriptionChart.data}
                                    type="Bar"
                                    options={emailsSubscriptionChart.options}
                                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                    listener={emailsSubscriptionChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                                <p className={classes.cardCategory}>Last Campaign Performance</p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> campaign sent 2 days ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="danger">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={completedTasksChart.data}
                                    type="Line"
                                    options={completedTasksChart.options}
                                    listener={completedTasksChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                                <p className={classes.cardCategory}>Last Campaign Performance</p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> campaign sent 2 days ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomTabs
                            title="Tasks:"
                            headerColor="primary"
                            tabs={[
                                {
                                    tabName: "Bugs",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[0, 3]}
                                            tasksIndexes={[0, 1, 2, 3]}
                                            tasks={bugs}
                                        />
                                    )
                                },
                                {
                                    tabName: "Website",
                                    tabIcon: Code,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[0]}
                                            tasksIndexes={[0, 1]}
                                            tasks={website}
                                        />
                                    )
                                },
                                {
                                    tabName: "Server",
                                    tabIcon: Cloud,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[1]}
                                            tasksIndexes={[0, 1, 2]}
                                            tasks={server}
                                        />
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                                <p className={classes.cardCategoryWhite}>
                                    New employees on 15th September, 2016
              </p>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["ID", "Name", "Salary", "Country"]}
                                    tableData={[
                                        ["1", "Dakota Rice", "$36,738", "Niger"],
                                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                        ["4", "Philip Chaney", "$38,735", "Korea, South"]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Dashboard)
