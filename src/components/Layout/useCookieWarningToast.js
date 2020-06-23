import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { toast } from '../../lib/react-tiny-toast';
import localizeTo from '../../helpers/localizeTo';
import { useCookieWarning } from '../../context';

let toastId;

const useCookieWarningToast = () => {
  const { isCookieWarned, onCloseCookierWarning } = useCookieWarning();
  const { t, i18n } = useTranslation();

  const onClose = () => {
    onCloseCookierWarning();
    toast.remove(toastId);
  };

  useEffect(() => {
    if (!isCookieWarned) {
      toastId = toast.show(
        {
          label: t('cookie-warning.text'),
          actions: [
            {
              title: t('cookie-warning.details'),
              to: localizeTo('/privacy', i18n.language),
              onClick: onClose,
            },
            { title: 'Ok', onClick: onClose },
          ],
          stacked: true,
        },
        {
          pause: true,
          position: 'bottom-center',
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCookieWarned]);
};

export default useCookieWarningToast;
