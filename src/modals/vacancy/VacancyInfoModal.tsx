import { JSX, forwardRef, useCallback } from 'react';
import { Text, View } from 'react-native';

import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { styles } from './vacancy-info-modal.styles';

export const VacancyInfoModal = forwardRef<BottomSheetModalMethods>((_, ref) => {
  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      style={styles.modalContainer}
      backgroundStyle={styles.modalBackground}
      snapPoints={['60%']}
      backdropComponent={renderBackdrop}>
      {props => (
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, styles.companyName]}>{props?.data?.companyName}</Text>
            <Text style={[styles.text, styles.title]}>{props?.data?.vacancy.title}</Text>
            <Text style={[styles.text, styles.salary]}>{props?.data?.vacancy.salary}</Text>
            <Text style={[styles.text, styles.description]}>
              {props?.data?.vacancy.description}
            </Text>
          </View>
        </View>
      )}
    </BottomSheetModal>
  );
});
