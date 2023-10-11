import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`/miapi.com/services/${serviceId}`).then(() => {});
  }, [serviceId]);

  return (
    <div>
      <h1>Service Detail: {serviceId}</h1>
    </div>
  );
};

export default ServiceDetail;
