import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import ExistingUser from "./ExistingUser"
import GuestUser from "./GuestUser"
import Update from "./components/Update"
import Search from "./components/searchFlight"
import SearchData from "./components/searchData"
import SearchUser from "./components/searchFlightUser"
import SearchDataUser from "./components/searchDataUser"
import SearchGuest from "./components/searchFlightGuest"
import SearchDataGuest from "./components/searchDataGuest"
import FlightDetails from "./components/flightDetails"
import FlightDetailsGuest from "./components/flightDetailsGuest"
import ReturnFlights from "./components/returnFlights";
import ReturnDetails from "./components/returnDetails";
import ReturnFlightsGuest from "./components/returnFlightsGuest";
import ReturnDetailsGuest from "./components/returnDetailsGuest";
import Summary from "./components/summary";
import SummaryGuest from "./components/summaryGuest";
import DepartureSeats from "./components/departureSeats";
import UpdateUser from "./components/UpdateUser";
import ReturnSeats from "./components/returnSeats";
import Itinerary from "./components/itinerary";
import Payment from "./components/stripeContainer";
import DepReserved from "./components/depReserved";
import RetReserved from "./components/retReserved";
import DepartureSeatsReserved from "./components/departureSeatsReserved";
import ReturnSeatsReserved from "./components/returnSeatsReserved";
import SearchDeparture from "./components/searchDeparture";
import SearchReturn from "./components/searchReturn";
import SearchDataDeparture from "./components/searchDataDeparture"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="admin" exact element={<Admin />} />
      <Route path="existingUser" exact element={<ExistingUser />} />
      <Route path="guestUser" exact element={<GuestUser />} />
      <Route path="admin/update/:id" exact element={<Update />} />
      <Route path="existingUser/updateUser/:id" exact element={<UpdateUser />} />
      <Route path="search" exact element={<Search />} />
      <Route path="searchData" exact element={<SearchData />} />
      <Route path="searchUser" exact element={<SearchUser />} />
      <Route path="searchDataUser" exact element={<SearchDataUser />} />
      <Route path="searchGuest" exact element={<SearchGuest />} />
      <Route path="searchDataGuest" exact element={<SearchDataGuest />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id/:cabinClass" exact element={<FlightDetails />} />
      <Route path="searchDataGuest/flightDetailsGuest/:adult/:children/:id/:cabinClass" exact element={<FlightDetailsGuest />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id/:cabinClass/returnFlights" exact element={<ReturnFlights />} />
      <Route path="searchDataGuest/flightDetailsGuest/:adult/:children/:id/:cabinClass/returnFlightsGuest" exact element={<ReturnFlightsGuest />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id1/:cabinClass/returnFlights/returnDetails/:id2" exact element={<ReturnDetails />} />
      <Route path="searchDataGuest/flightDetailsGuest/:adult/:children/:id1/:cabinClass/returnFlightsGuest/returnDetailsGuest/:id2" exact element={<ReturnDetailsGuest />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id1/:cabinClass/returnFlights/returnDetails/:id2/summary" exact element={<Summary />} />
      <Route path="searchDataGuest/flightDetailsGuest/:adult/:children/:id1/:cabinClass/returnFlightsGuest/returnDetailsGuest/:id2/summaryGuest" exact element={<SummaryGuest />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id1/:cabinClass/returnFlights/returnDetails/:id2/summary/depSeats" exact element={<DepartureSeats />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id1/:cabinClass/returnFlights/returnDetails/:id2/summary/depSeats/retSeats" exact element={<ReturnSeats />} />
      <Route path="searchDataUser/flightDetails/:adult/:children/:id1/:cabinClass/returnFlights/returnDetails/:id2/summary/depSeats/retSeats/itinerary" exact element={<Itinerary />} />
      <Route path="existingUser/payment/:id1/:id2/:cabinClass" exact element={<Payment />} />
      <Route path="existingUser/depReserved/:id/:ID" exact element={< DepReserved/>} />
      <Route path="existingUser/retReserved/:id/:ID" exact element={< RetReserved/>} />
      <Route path="existingUser/depReserved/:id/:ID/depSeatsReserved" exact element={< DepartureSeatsReserved/>} />
      <Route path="existingUser/retReserved/:id/:ID/retSeatsReserved" exact element={< ReturnSeatsReserved/>} />
      <Route path="existingUser/depReserved/:id/:ID/editDepReserved" exact element={< SearchDeparture/>} />
      <Route path="existingUser/depReserved/:id/:ID/editDepReserved/searchDataDep" exact element={< SearchDataDeparture/>} />
      <Route path="existingUser/retReserved/:id/:ID/editRetReserved" exact element={< SearchReturn/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);