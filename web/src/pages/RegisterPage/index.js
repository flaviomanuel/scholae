import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';

import { Container,BoxContainer } from '../../assets/styles/global';
import { ButtonSubmit } from '../LoginPage/styles';

import Forms from '../../components/Forms';
import Input from '../../components/Input';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import { FaFileUpload } from 'react-icons/fa';

import api from '../../services/api';

function RegisterPage() {
    
    const[classrooms, setClassrooms] = useState([]);
    const[title, setTitle] = useState('');
    const[selectedCheckbox, setSelectedCheckbox] = useState([]);
    const[description, setDescription] = useState('');

    
    useEffect(() => {
        api.get('/classrooms').then((response) => {
            setClassrooms(response.data);
        })
    }, 
    [])

    

    async function handleSubmit(e)  {
        e.preventDefault();

        const user_id = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        // console.log('tokenzao: ',token);

        const data = {
            title,
            selectedCheckbox,
            description,
            user_id
        }

        const tokenInclude = `Bearer ${token}`;
        try {

        //     const options = { 
        //         headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjA5NzkxMTQ1LCJleHAiOjE2MDk4Nzc1NDV9.8y7JDh74vRuPRFTV7MjVaS5-37a6GHBZMQVorTvsds8',
        //      }
        //    }

        //     const createMessage = await api.post('/messages', data, options);

            console.log('infos: ', data);
        } catch (error) {
            // Error 😨
            if (error.response) {
    
                alert(error.response.data.error)
    
            } else if (error.request) {
                
                console.log('erro de requisição: ',error.request);
                
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        }}


        function handleSelectedCheckbox(event) {

            const { value } = event.target;
            const id = parseInt(value)

            const alreadySelected = selectedCheckbox.findIndex(item => item === id )

            if(alreadySelected >= 0) {
                const filteredItems = selectedCheckbox.filter(item => item !== id);

                setSelectedCheckbox(filteredItems)
            } else {
            setSelectedCheckbox([...selectedCheckbox, id])

            }


        }

    return(
        <Container>
            <Header/>

            <BoxContainer>
                <Banner Icon={FaFileUpload}>Cadastro de avisos</Banner>
                <Forms onSubmit={handleSubmit} isLoginPage={false}>
                    <Input
                    label="Título"
                    name="title"
                    type="text"
                    suggestions=''
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    />
                    
                    <Input
                    label="Turmas"
                    name="classrooms"
                    type="checkbox"
                    suggestions={classrooms}
                    onClick={handleSelectedCheckbox}
                    // onChange={event => setSelectedCheckbox(event.target.value)}
                    />

                    <Input
                    label="Descrição"
                    name="description"
                    type="textarea"
                    suggestions=""
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />

                    <ButtonSubmit type="submit">Submeter</ButtonSubmit>
                </Forms>
                
            </BoxContainer>

            <Footer/>
        </Container>
    )
}



export default RegisterPage;