// =============================================
// LoadingScreen.tsx
// =============================================
import { motion, AnimatePresence } from 'framer-motion';

interface Props { isLoading: boolean }

export default function LoadingScreen({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="loading-logo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MJ
          </motion.div>

          <motion.div
            className="loading-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="loading-bar-fill" />
          </motion.div>

          <motion.p
            style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
