import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyButton from '../buttons/MyFirstButton';
import HomePage from '../pages/home/HomePage';
import Suporte from '../pages/aboutpage/AboutPage';
import PessoasJuridicas from '../pages/pessoasjurica/PessoasJuridicas';
import PessoasFisicas from '../pages/pessoasfisicas/PessoasFisicas';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/button" element={<MyButton />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/pj'element ={<PessoasJuridicas/>}/>
        <Route path='/pf'element ={<PessoasFisicas/>}/>
      </Routes>
    </Router>
  );
}