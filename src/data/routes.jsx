import * as Pages from "@/pages"

export const routes = [
    {
        route: "/login",
        page: <Pages.Login />
    },
    {
        route: "/sign-up",
        page: <Pages.SignUp />
    },

    // Stock Manager
    {
        title: "Stock Summary",
        route: "/",
        page: <Pages.StockSummary />
    },

    {
        title: "Stock Summary",
        route: "/stock-summary",
        page: <Pages.StockSummary />
    },
    {
        title: "Stock Requests",
        route: "/stock-requests",
        page: <Pages.StockRequests />
    },
    {
        title: "Distribution Runs",
        route: "/distribution-runs",
        page: <Pages.DistributionRuns />
    },
    {
        title: "Return Approvals",
        route: "/return-approvals",
        page: <Pages.ReturnApprovals />
    },

    //fdo
    {
        title: "Stock Request",
        route: "/fdo",
        page: <Pages.FDOStockRequests />
    },
    {
        title: "Stock Request",
        route: "/fdo/stock-requests",
        page: <Pages.FDOStockRequests />
    },
    {
        title: "Distributions",
        route: "/fdo/distributions",
        page: <Pages.FDODistributions />
    },
    {
        title: "Run History",
        route: "/fdo/run-history",
        page: <Pages.FDORunHistory />
    },
]