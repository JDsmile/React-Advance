import "./App.css";
import React from "react";
import StopWatch from "./component/StopWatchFn";
import StopWatchCl from "./component/StopWatchCl";
import Counter from "./component/Counter";
import Stock from "./component/Stock";
import CounterCl from "./component/CounterCl";
function App() {
  const pages = [
    {
      pageName: "StopWatchFunction",
      pageContent: StopWatch,
    },
    {
      pageName: "StockFunction",
      pageContent: Stock,
    },
    {
      pageName: "CounterClass",
      pageContent: CounterCl,
    },
    {
      pageName: "StopWatchClass",
      pageContent: StopWatchCl,
    },
    {
      pageName: "CounterFunction",
      pageContent: Counter,
    },
  ];

  const [currentPage, setCrrentPage] = React.useState(pages[0]);
  const handleChangePage = (event, nextPage) => {
    event.preventDefault();
    setCrrentPage(nextPage);
  };
  const renderPage = () => {
    const CurrentPageComponent = currentPage.pageContent;
    return <CurrentPageComponent />;
  };

  return (
    <div className="App">
      <nav>
        {pages.map((page, index) => (
          <a
            href={`./${page.pageName}`}
            onClick={(e) => handleChangePage(e, page)}
            key={page.pageName}
          >
            {page.pageName}
          </a>
        ))}
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
