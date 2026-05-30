import { Button} from "react-bootstrap";
import Box from "../../componetes/Box";
import Pagina from "../../componetes/Pagina";

export default function Home() {
  return (
    <Pagina>

      <div className="container mt-4">
        <Box titulo="fabiana rocha">
          <p>teste de paragrafos 1</p>
          <p>teste de paragraehwehuiwdfh ghfdiwsgdfyuwgfdsfusjhgdksbfsdhsdkjs</p>
        </Box>
        <Box titulo="Stela Henrique Rocha">
          <p>teste de paragrafos 1</p>
          <p>teste de paragraehwehuiwdfh ghfdiwsgdfyuwgfdsfusjhgdksbfsdhsdkjs</p>

          <Button variant="danger">detalhe do teste</Button>
          <Button variant="success">detalhe do texto</Button>
        </Box>
        <Box titulo="Diego Henrique Bezerra">
          <p>teste de paragrafos 2</p>
          <Button variant="primary">teste</Button>
          <p>teste de paragraehwehuiwdfh ghfdiwsgdfyuwgfdsfusjhgdksbfsdhsdkjs</p>

          <Button variant="warning">teste 2</Button>
        </Box>

        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
    </Pagina>
  );
}
