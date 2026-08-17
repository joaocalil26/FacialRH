import * as Device from 'expo-device';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//! IMPORTES USADOS NO APP

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useEffect, useState } from 'react';

import { BsFillClockFill } from "react-icons/bs";
import { Clock } from '@/components/Clock';


function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {

  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'recognizing') {
      const timer = setTimeout(() => {
        setStatus('success');
      } , 3000); }
      else if (status === 'success') {
        const timer = setTimeout(() => {
          setStatus('idle');
        }, 3000);   //! Simula o tempo de reconhecimento facial (3 segundos)

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            FacialRH
          </ThemedText>
        <Clock/>
          <ThemedText>
            Sistema de Controle de jornada
          </ThemedText>
        <Pressable onPress={() => setStatus('recognizing')}>
          <ThemedText>
            Registrar Ponto
          </ThemedText>
        </Pressable>
        {status === 'recognizing' && (
  <ThemedText>
    🔍 Reconhecendo...
  </ThemedText>
)}
  {status === 'success' && (
  <ThemedText>
     ✅ Reconhecimento bem-sucedido!
  </ThemedText>
)}
        </ThemedView>
        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({  //TODO aqui é um objeto de estilo do React Native, usado para definir estilos para os componentes da tela inicial. Ele contém várias propriedades que controlam a aparência e o layout dos elementos na tela.
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
