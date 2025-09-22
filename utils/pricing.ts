// utils/pricing.ts

// Constantes partagées pour le calcul des coûts
export const TRANSPORT_FEE = 1500; // Estimation transport Europe -> Maroc
export const CUSTOMS_FEE_PERCENTAGE = 0.30; // Estimation de 30%
export const SERVICE_FEE = 950; // Nos frais de service

/**
 * Calcule tous les coûts d'importation basés sur le prix de base d'un véhicule.
 * @param basePrice Le prix de la voiture en Europe.
 * @returns Un objet contenant tous les frais calculés et le coût total.
 */
export const calculateImportCosts = (basePrice: number) => {
  const customsFee = basePrice * CUSTOMS_FEE_PERCENTAGE;
  const totalCost = basePrice + TRANSPORT_FEE + customsFee + SERVICE_FEE;

  return {
    basePrice,
    transportFee: TRANSPORT_FEE,
    customsFee,
    serviceFee: SERVICE_FEE,
    totalCost,
  };
};
