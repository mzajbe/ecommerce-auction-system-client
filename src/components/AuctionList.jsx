import UpcomingAuction from "./UpcomingAuction";

const AuctionList = () => {
    const auctions = [
      { image: "/path/to/car-image-1.jpg", endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000 },
      { image: "/path/to/car-image-2.jpg", endTime: new Date().getTime() + 2 * 24 * 60 * 60 * 1000 },
      { image: "/path/to/car-image-3.jpg", endTime: new Date().getTime() + 1 * 24 * 60 * 60 * 1000 },
      { image: "/path/to/car-image-4.jpg", endTime: new Date().getTime() + 6 * 60 * 60 * 1000 },
      { image: "/path/to/main-car-image.jpg", endTime: new Date().getTime() + 12 * 60 * 60 * 1000 },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
        {auctions.map((auction, index) => (
          <UpcomingAuction key={index} image={auction.image} endTime={auction.endTime} />
          
        ))}
      </div>
    );
  };
  
  export default AuctionList;