import { Tab, Tabs } from 'react-bootstrap';
import '../../../public/sass/pages/tabsCom.scss';

const TabCom = () => {


  return (
    <div className="tab_main">
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" className='tab_desc' title="Home">
          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder. Bear claw candy topping.
          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet.
        </Tab>
        <Tab eventKey="profile" className='tab_desc' title="Profile">
          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake.
          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton candy liquorice caramels.
        </Tab>
        <Tab eventKey="messages" className='tab_desc' title="Messages">
          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies cupcake gummi bears cake chocolate.
          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly jelly-o tart brownie jelly.
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabCom;