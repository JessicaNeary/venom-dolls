import React from "react";
import Modal from "react-bootstrap/Modal";

const SizeChart = ({ isOpen, toggle, type }) => {
  return (
    <Modal size="lg" show={isOpen} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">SIZE CHART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">Tee Shirts</h4>
        <div className="table-responsive-sm">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="row" className="text-start">
                  MEASUREMENT
                </th>
                <th scope="col">XS</th>
                <th scope="col">SM</th>
                <th scope="col">MD</th>
                <th scope="col">LG</th>
                <th scope="col">XL</th>
                <th scope="col">2XL</th>
                <th scope="col">3XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Body Width (cm)
                </th>
                <td>42</td>
                <td>47</td>
                <td>52</td>
                <td>56.5</td>
                <td>61</td>
                <td>64</td>
                <td>68</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Body Length (cm)
                </th>
                <td>68</td>
                <td>71</td>
                <td>75</td>
                <td>78.5</td>
                <td>82</td>
                <td>83.5</td>
                <td>85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="text-center pt-4 mt-4">Hoodies</h4>
        <div className="table-responsive-sm">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="row" className="text-start">
                  MEASUREMENT
                </th>
                <th scope="col">XS</th>
                <th scope="col">SM</th>
                <th scope="col">MD</th>
                <th scope="col">LG</th>
                <th scope="col">XL</th>
                <th scope="col">2XL</th>
                <th scope="col">3XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Body Width (cm)
                </th>
                <td>42</td>
                <td>47</td>
                <td>52</td>
                <td>56.5</td>
                <td>61</td>
                <td>64</td>
                <td>68</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Body Length (cm)
                </th>
                <td>68</td>
                <td>71</td>
                <td>75</td>
                <td>78.5</td>
                <td>82</td>
                <td>83.5</td>
                <td>85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SizeChart;
