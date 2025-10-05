import React, { useEffect, useState } from "react";
import "./publicationspage.css";

import APIService from "../../../../../../api/Service";
import BarGraph from "../../../../../../components/general/BarGraph/BarGraph";
import PublicationCard from "../../../../../../components/StaffPage/PublicationCard/PublicationCard";
import HorizontalSelectList from "../../../../../../components/general/HorizontalSelectList/HorizontalSelectList";

export interface dataObj {
  label: string;
  Count: number;
}

export interface paperDetails {
  title: string;
  year: number;
  members: string;
  publicationName: string;
  url: string;
}

// interface publication {
//   title: string;
//   year: number;
//   members: string;
//   publicationName: string;
//   url: string;
// }

function PublicationsPage() {
  const papersPerPage = 9;

  const [totalPagesGlobal, settotalPagesGlobal] = useState(0);
  const [pageNo, setPageNo] = useState("0");
  const [paginatorItems, setPaginatorItems] = useState<string[]>([]);

  const [publications, setPublications] = useState<paperDetails[]>([]);
  const [countData, setCountData] = useState<dataObj[]>();
  const [papers, setPapers] = useState<paperDetails[]>();

  useEffect(() => {
    const fetchPublicationCount = async () => {
      try {
        const qualificationsBody = {
          tag: "getPublicationYearCount",
          param: null,
        };
        const res = await APIService.PostData(qualificationsBody, "/DB/Query");
        const data = res.data;

        const cData: dataObj[] = data.map((item) => ({
          label: item.Year + "",
          Count: item.Count,
        }));
        setCountData(cData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPublications = async () => {
      try {
        const qualificationsBody = {
          tag: "getAllPublications",
          param: null,
        };
        const res = await APIService.PostData(qualificationsBody, "/DB/Query");
        const data = res.data;

        let pData: paperDetails[] = data.map((item) => ({
          title: item.PaperTitle,
          year: item.Year + "",
          members: item.Members,
          publicationName: item.PublicationName,
          url: item.URL,
        }));

        for (let i = 0; i < 6; i++) {
          pData = pData.concat(pData);
        }

        setPapers(pData);
        generatePaginationButtons(1, Math.ceil(pData.length / papersPerPage));
        setPageNo("1");
        settotalPagesGlobal(pData.length);

        console.log(pData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPublicationCount();
    fetchPublications();
  }, []);

  // function generatePaginationButtons(totalCount: number, itemsPerPage: number): string[] {
  //   const totalPages = Math.ceil(totalCount / itemsPerPage);
  //   const paginationButtons: string[] = ["Prev"];

  //   if (totalPages <= 1) {
  //     return paginationButtons;
  //   }
  //   for (let i = 1; i <= totalPages; i++) {
  //     paginationButtons.push(i+'');
  //   }

  //   paginationButtons.push("Next");
  //   return paginationButtons;
  // }

  function generatePaginationButtons(
    currentPage: number,
    totalPages: number
  ): string[] {
    if (
      !Number.isInteger(currentPage) ||
      !Number.isInteger(totalPages) ||
      currentPage < 0 ||
      totalPages < 1
    ) {
      throw new Error(
        "Invalid input. Both currentPage and totalPages should be non-negative integers."
      );
    }

    const buttons: string[] = [];

    if (totalPages <= 1) {
      return buttons;
    }

    buttons.push("Prev");

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(String(i));
      }
    } else {
      buttons.push("1");

      if (currentPage < 4) {
        buttons.push("2", "3");
        console.log("pain");
        
        buttons.push("..", String(totalPages));
      } else if (currentPage >= totalPages - 2) {
        buttons.push("..", String(totalPages - 2), String(totalPages - 1));
      } else {
        buttons.push(
          "..",
          String(currentPage - 1),
          String(currentPage),
          String(currentPage + 1),
          "..",
          String(totalPages)
        );

        setPageNo(currentPage+"");
      }
    }

    buttons.push("Next");

    console.log("buttons huh", totalPages);
    setPaginatorItems(buttons);

    return buttons;
  }

  const paginatorUpdated = (item: string) => {
    console.log(item);

    if (item === "Next") {
      const nextPage = parseInt(pageNo) + 1 + "";
      if (parseInt(nextPage) !== totalPagesGlobal) {
        const newPaginationButtons = generatePaginationButtons(
          parseInt(nextPage),
          Math.ceil(totalPagesGlobal / papersPerPage)
        );
        setPaginatorItems(newPaginationButtons);
      }

      if (paginatorItems.includes(nextPage)) {
        setPageNo(nextPage);
      }
    } else if (!isNaN(Number(item))) {
      setPageNo(item);
    } else if (item === "Prev") {
      const prevPage = parseInt(pageNo) - 1 + "";

      if (parseInt(prevPage) !== 0) {
        const newPaginationButtons = generatePaginationButtons(
          parseInt(prevPage),
          Math.ceil(totalPagesGlobal / papersPerPage)
        );
        setPaginatorItems(newPaginationButtons);
      }

      if (paginatorItems.includes(prevPage)) {
        setPageNo(prevPage);
      }
    }
  };

  return (
    <div className="publications-container">
      <div className="page-title">Research Publications</div>
      <BarGraph dataFetched={countData} />

      <div className="component-container">
        <div className="pub-title">Publications</div>
        {papers
          ?.slice(
            (parseInt(pageNo) - 1) * papersPerPage,
            parseInt(pageNo) * papersPerPage
          )

          .map((item, index) => (
            <PublicationCard key={`${item}${index}`} data={item} />
          ))}
      </div>

      <div className="paginator">
        <HorizontalSelectList
          items={paginatorItems}
          selectedItem={pageNo}
          enabled={true}
          setSelectedItem={(item) => paginatorUpdated(item)}
        />
      </div>
    </div>
  );
}

export default PublicationsPage;
