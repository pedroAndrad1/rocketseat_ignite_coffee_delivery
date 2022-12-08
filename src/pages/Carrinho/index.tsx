import { MapPinLine } from "phosphor-react";
import Container from "../../components/Container";
import { theme } from "../../styles/theme";
import { BoxDescription, BoxTitle, CarrinhoForm, DadosContainer, DescriptionBoxContainer, EnderecoBox, EnderecoGrid, ErrorMessage, Input, SelectedCoffees, SelectedCoffeesContainer, SubTitle } from "./styles";
import useCorreios from '../../custom-hooks/useCorreios';
import { useState } from "react";

const Carrinho = () => {

    const { findByCep } = useCorreios();
    const [cep, setCep] = useState('');
    const [cepInvalido, setCepInvalido] = useState(false);
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const updateCep = (cepValue: string) =>{
        setCep(cepValue);
        if(cepValue.length == 8){            
            findByCep(cepValue)
            .then(res => {
                if (!res || res.erro) {
                    setCepInvalido(true);
                }
                else {
                    setRua(res.logradouro);
                    setBairro(res.bairro);
                    setCidade(res.localidade);
                    setUf(res.uf);
                    setCepInvalido(false);
                }
            })
        }
        else{
            setCepInvalido(false);
        }

        if(cepValue.length == 0){
            setRua('');
            setBairro('');
            setCidade('');
            setUf('');
        }
    }

    return (
        <Container>
            <main>
                <CarrinhoForm>
                    <DadosContainer>
                        <SubTitle>Complete seu pedido</SubTitle>
                        <EnderecoBox>
                            <DescriptionBoxContainer>
                                <MapPinLine size={22} weight="bold" color={theme.yellow} />
                                <div>
                                    <BoxTitle>Endereço de Entrega</BoxTitle>
                                    <BoxDescription>Informe o endereço onde deseja receber seu pedido</BoxDescription>
                                </div>
                            </DescriptionBoxContainer>
                            <EnderecoGrid>
                                <Input value={cep} onChange={e => updateCep(e.target.value)} maxLength={8} startColumn={1} endColumn={7} placeholder="CEP"></Input>
                                {cepInvalido && <ErrorMessage startColumn={1} endColumn={7} startRow={2}>Cep inválido!</ErrorMessage>}
                                <Input value={rua} readOnly startColumn={1} endColumn={16} placeholder="Rua" startRow={3} disabled></Input>
                                <Input value={numero} onChange={e => setNumero(e.target.value)} type='number' min={0} startColumn={1} endColumn={7} placeholder="Número"></Input>
                                <Input value={complemento} onChange={e => setComplemento(e.target.value)} startColumn={7} endColumn={16} placeholder="Complemento (Opcional)"></Input>
                                <Input value={bairro} readOnly startColumn={1} endColumn={7} placeholder="Bairro" disabled></Input>
                                <Input value={cidade} readOnly startColumn={7} endColumn={14} placeholder="Cidade" disabled></Input>
                                <Input value={uf} readOnly startColumn={14} endColumn={16} placeholder="UF" disabled></Input>
                            </EnderecoGrid>
                        </EnderecoBox>
                    </DadosContainer>
                    <SelectedCoffeesContainer>
                        <SubTitle>Cafés selecionados</SubTitle>
                        <SelectedCoffees></SelectedCoffees>
                    </SelectedCoffeesContainer>
                </CarrinhoForm>
            </main>
        </Container>
    )
}
export default Carrinho;