import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/11/2021</td>
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw">-R$1200</td>
                        <td>Casa</td>
                        <td>20/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}