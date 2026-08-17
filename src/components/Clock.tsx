import { Text } from 'react-native';
import { useEffect, useState } from 'react';


export function Clock() {
      const [currentTime, setCurrentTime] = useState(new Date()); //? CurrentTime ( Puxa o horário atual) , setCurrentTime ( Atualiza o Horario )
        useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return (
<Text>
      Horário: {currentTime.toLocaleTimeString('pt-BR')}
</Text>




    );
}