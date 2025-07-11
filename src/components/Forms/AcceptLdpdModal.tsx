import { HEADER_LDPD_TEXT, LABEL_LDPD_TEXT, LDPD_TEXT } from '@/constants/ldpd';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Button from '../Buttons/Button';
import ErrorMessage from './ErrorMessage';

const AcceptLdpdModal = ({
  checkBoxName = 'acceptLdpd',
  textContent = LDPD_TEXT,
  header = HEADER_LDPD_TEXT,
  label = LABEL_LDPD_TEXT,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex">
      <Controller
        name={checkBoxName}
        rules={{ required: 'El campo autorización debe ser aceptado para continuar' }}
        render={({ field, fieldState, formState }) => (
          <div>
            <div className="flex items-center">
              <Checkbox
                invalid={fieldState.invalid}
                name="acceptLdpd"
                inputId={field.name}
                checked={field.value}
                onChange={({ checked }) => field.onChange(checked)}
              />
              <label
                className="ml-2 underline text-blue-600 cursor-pointer select-none"
                onClick={() => setVisible(true)}
                dangerouslySetInnerHTML={{ __html: label }}
              />
            </div>
            <ErrorMessage name={checkBoxName} />
          </div>
        )}
      />

      <Dialog
        visible={visible}
        closeOnEscape
        onHide={() => setVisible(false)}
        draggable={false}
        breakpoints={{ '641px': '100vw', '999999px': '75vw' }}
        header={header}
        headerClassName="text-center text-lg"
        contentStyle={{ maxHeight: '40rem' }}
      >
        <div
          className="w-full px-7"
          style={{
            overflowY: 'auto',
            maxHeight: '30rem',
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: textContent }} />
        </div>
        <Button className="mt-5" block label="Volver" onClick={() => setVisible(false)} />
      </Dialog>
    </div>
  );
};

export default AcceptLdpdModal;
