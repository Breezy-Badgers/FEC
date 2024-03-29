import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import RatingBars from "./RatingBars.jsx";
import ProductBreakDown from "./ProductBreakdown.jsx";
import StarRatingsContainer from "../../../../src/redux/containers/RatingContainers/StarRatingsContainer";
const RatingDisplay = ({
  productInfo,
  handleGetRatingsRequest,
  metaData,
  handleFilterRatingsRequest,
  handleGetReviewsRequest,
  handleClearFilterRequest,
  filters,
  setFilters
}) => {
  const clearFilter = () => {
    handleClearFilterRequest(1);
  };
  const getTotal = ratings => {
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total;
  };

  const getAverage = ratings => {
   
    let totalVotes = getTotal(ratings);
    let totalRatings = 0
    for(let rating in ratings){
      totalRatings+= ratings[rating]*rating
    }
    
    return totalRatings / totalVotes;
  };

  const recommendPercent = obj => {
    let total = 0;
    Object.keys(obj).map(key => {
      total += obj[key];
    });
    return Math.floor((obj[1] / total) * 100);
  };
  return (
    <div>
      {metaData.ratings ? (
        <div className="rating-display-container">
          <div className="rating-star">
            <h2 className="rating-star-text">
              {getAverage(metaData.ratings).toFixed(1)}
            </h2>
            <StarRatingsContainer />
          </div>
          <div>
            {" "}
            <p>
              {recommendPercent(metaData.recommended)} % of reviews recommend
              this product
            </p>
          </div>
          <RatingBars
            total={getTotal(metaData.ratings)}
            ratings={metaData.ratings}
            handleClick={handleFilterRatingsRequest}
            id={productInfo.id}
            handleClearFilter={clearFilter}
            setFilters={setFilters}
            filters={filters}
          />
          <ProductBreakDown characteristics={metaData.characteristics} />
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default RatingDisplay;
