import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import Container from "../../components/Container";
import { theme } from "../../styles/theme";
import { Box, BoxDescription, BoxDescriptionContainer, BoxTitle, CarrinhoForm, ConfirmarButton, DadosContainer, EnderecoGrid, ErrorMessage, FormaDePagamento, FormasDePagamentoList, Input, NoCoffee, SelectedCoffees, SelectedCoffeesContainer, SubTitle, Valores } from "./styles";
import useCorreios from '../../custom-hooks/useCorreios';
import { FormEvent, useState } from "react";
import { Endereco, useCarrinhoContext } from "../../contexts/CarrinhoContext";
import SelectedCoffee from "../../components/SelectedCoffee";
import Currency from 'react-currency-formatter';
import useToast from "../../custom-hooks/useToast";
import { useNavigate } from "react-router-dom";


const Carrinho = () => {

    const { findByCep } = useCorreios();
    const { error } = useToast();
    const { carrinho,adicionarEndereco, adicionarFormaPagamento } = useCarrinhoContext();
    const navigate = useNavigate()
    const [cep, setCep] = useState('');
    const [cepInvalido, setCepInvalido] = useState(false);
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [credito, setCredito] = useState(true);
    const [debito, setDebito] = useState(false);
    const [dinheiro, setDinheiro] = useState(false);

    const updateCep = (cepValue: string) => {
        setCep(cepValue);
        if (cepValue.length == 8) {
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
        else {
            setCepInvalido(false);
        }

        if (cepValue.length == 0) {
            setRua('');
            setBairro('');
            setCidade('');
            setUf('');
        }
    }

    const selectFormaDePagamento = (forma: 'CREDITO' | 'DEBITO' | 'DINHEIRO') => {
        switch (forma) {
            case 'CREDITO': {
                setCredito(true);
                setDebito(false);
                setDinheiro(false);
                return;
            }
            case 'DEBITO': {
                setCredito(false);
                setDebito(true);
                setDinheiro(false);
                return;
            }
            case 'DINHEIRO': {
                setCredito(false);
                setDebito(false);
                setDinheiro(true);
                return;
            }
        }
    }

    const somaValores = () => {
        return carrinho.reduce((accumulate, currentValue) => {
            return accumulate + 
            (Number.parseFloat(currentValue.coffee.value) * (currentValue.amount as number));
        }, 0);

    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!cepInvalido && numero.length) {
            adicionarEndereco({
                rua: rua,
                numero: numero,
                complemento: complemento ? complemento : ''
            });
            addFormaPagamento();
            navigate(`/compra-confirmada/${Math.floor(Math.random() * 100)}`)
        }
        else {
            error('Campos inválidos ou incompletos!')
        }
    }

    const addFormaPagamento = () =>{
        if(credito){
            adicionarFormaPagamento('Cartão de crédito');
        }
        else if(debito){
            adicionarFormaPagamento('Cartão de débito');
        }
        else{
            adicionarFormaPagamento('Dinheiro');
        }
    }

    return (
        <Container>
            <main>
                <CarrinhoForm onSubmit={e => handleSubmit(e)}>
                    <DadosContainer>
                        <SubTitle>Complete seu pedido</SubTitle>
                        <Box>
                            <BoxDescriptionContainer>
                                <MapPinLine size={22} weight="bold" color={theme.yellow} />
                                <div>
                                    <BoxTitle>Endereço de Entrega</BoxTitle>
                                    <BoxDescription>Informe o endereço onde deseja receber seu pedido</BoxDescription>
                                </div>
                            </BoxDescriptionContainer>
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
                        </Box>
                        <Box>
                            <BoxDescriptionContainer>
                                <CurrencyDollar size={22} weight="light" color={theme.purple} />
                                <div>
                                    <BoxTitle>Pagamento</BoxTitle>
                                    <BoxDescription>O pagamento é feito na entrega. Escolha a forma que deseja pagar</BoxDescription>
                                </div>
                            </BoxDescriptionContainer>
                            <FormasDePagamentoList>
                                <FormaDePagamento selected={credito} onClick={() => selectFormaDePagamento('CREDITO')}>
                                    <CreditCard size={22} weight="light" color={theme.purple} />
                                    <p>CARTÃO DE CRÉDITO</p>
                                </FormaDePagamento>
                                <FormaDePagamento selected={debito} onClick={() => selectFormaDePagamento('DEBITO')}>
                                    <Bank size={22} weight="light" color={theme.purple} />
                                    <p>CARTÃO DE DÉBITO</p>
                                </FormaDePagamento>
                                <FormaDePagamento selected={dinheiro} onClick={() => selectFormaDePagamento('DINHEIRO')}>
                                    <Money size={22} weight="light" color={theme.purple} />
                                    <p>DINHEIRO</p>
                                </FormaDePagamento>
                            </FormasDePagamentoList>
                        </Box>
                    </DadosContainer>
                    <SelectedCoffeesContainer>
                        <SubTitle>Cafés selecionados</SubTitle>
                        {
                            carrinho.length > 0 ?
                                <SelectedCoffees>
                                    {
                                        carrinho.map((carrinhoItem, i) => {
                                            return (<SelectedCoffee key={`selected_coffee_${i}`} coffee={carrinhoItem.coffee} amount={carrinhoItem.amount as number}></SelectedCoffee>)
                                        })
                                    }
                                    <Valores>
                                        <span>Total de itens</span>
                                        <span><Currency quantity={somaValores()} currency="BRL"></Currency></span>
                                        <span>Entrega</span>
                                        <span>R$3,50</span>
                                        <span>Total</span>
                                        <span><Currency quantity={somaValores() + 3.5} currency="BRL"></Currency></span>
                                    </Valores>
                                    <ConfirmarButton type="submit">Confirmar pedido</ConfirmarButton>
                                </SelectedCoffees>
                                :
                                <NoCoffee>Por favor, selecione um produto!</NoCoffee>
                        }
                    </SelectedCoffeesContainer>
                </CarrinhoForm>
            </main>
        </Container>
    )
}
export default Carrinho;