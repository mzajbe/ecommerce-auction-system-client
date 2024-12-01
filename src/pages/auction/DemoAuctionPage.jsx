import  { useState } from 'react';

const initialAuctions = [
    {
      id: 1,
      title: "Vintage Guitar",
      description: "1959 Gibson Les Paul Standard",
      currentBid: 45000,
      startPrice: 35000,
      endTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
      bids: [
        { user: "collector_1", amount: 40000 },
        { user: "music_fan", amount: 45000 }
      ]
    },
    {
      id: 2,
      title: "Classic Watch",
      description: "Rolex Submariner 1968",
      currentBid: 18500,
      startPrice: 15000,
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
      bids: [
        { user: "timepiece_lover", amount: 16000 },
        { user: "collector_2", amount: 18500 }
      ]
    }
  ];

const DemoAuctionPage = () => {
    const [auctions, setAuctions] = useState(initialAuctions);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [newBid, setNewBid] = useState('');

  const placeBid = () => {
    if (!selectedAuction) return;
    
    const bidAmount = parseFloat(newBid);
    if (bidAmount > selectedAuction.currentBid) {
      const updatedAuctions = auctions.map(auction => 
        auction.id === selectedAuction.id 
          ? {
              ...auction, 
              currentBid: bidAmount,
              bids: [...auction.bids, { user: 'current_user', amount: bidAmount }]
            }
          : auction
      );
      
      setAuctions(updatedAuctions);
      setSelectedAuction(updatedAuctions.find(a => a.id === selectedAuction.id));
      setNewBid('');
    } else {
      alert('Bid must be higher than current bid');
    }
  };
    return (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md p-4 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-20">Active Auctions</h2>
          {auctions.map(auction => (
            <div 
              key={auction.id} 
              onClick={() => setSelectedAuction(auction)}
              className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${selectedAuction?.id === auction.id ? 'bg-blue-50 border-blue-300' : ''}`}
            >
              <h3 className="font-semibold">{auction.title}</h3>
              <p className="text-sm text-gray-600">Current Bid: ${auction.currentBid}</p>
            </div>
          ))}
        </div>
  
        {/* Main Content Area */}
        <div className="flex-grow p-8">
          {selectedAuction ? (
            <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
              <h1 className="text-3xl font-bold mb-4">{selectedAuction.title}</h1>
              <p className="text-gray-600 mb-4">{selectedAuction.description}</p>
  
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold">Current Bid</h3>
                  <p className="text-2xl text-green-600">${selectedAuction.currentBid}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Time Remaining</h3>
                  <p>{Math.round((selectedAuction.endTime - new Date()) / (1000 * 60 * 60))} hours</p>
                </div>
              </div>
  
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Bid History</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {selectedAuction.bids.map((bid, index) => (
                    <div key={index} className="flex justify-between border-b py-2 last:border-b-0">
                      <span>{bid.user}</span>
                      <span className="font-semibold">${bid.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="flex space-x-4">
                <input 
                  type="number" 
                  value={newBid}
                  onChange={(e) => setNewBid(e.target.value)}
                  placeholder="Enter your bid"
                  className="flex-grow border rounded-lg p-2"
                />
                <button 
                  onClick={placeBid}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Place Bid
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Select an auction to view details
            </div>
          )}
        </div>
      </div>
    );
};

export default DemoAuctionPage;