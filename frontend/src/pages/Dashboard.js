import React, { useEffect } from "react";
import AllLocation from "../pages/AllLocation/AllLocation";
import { useNavigate } from "react-router-dom";
import MainScreen from "../components/comman/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { listLocations } from "../redux/action/locationAction";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Row } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationList = useSelector((state) => state.locationList);
  const { error, loading, locations } = locationList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    } else {
      dispatch(listLocations());
    }
  }, [dispatch, navigate, userInfo]);
  return (
    <MainScreen title={`Most favotite places in Lucknow`}>
      <>
        {loading && <Loading sendInfo="info" />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div className="mt-5  card-wrapper">
          <Row>
            <AllLocation locations={locations} />
          </Row>
        </div>
      </>
    </MainScreen>
  );
};

export default Dashboard;
