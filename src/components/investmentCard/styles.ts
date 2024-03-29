import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  InvestmentList:{
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: theme.light.colors.background,
    marginTop: 10,
  },
  ct:{
    width: '70%',
  },
  InvestmentCard:{
    borderLeftWidth: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.light.colors.background,
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  cardTitle:{
    fontWeight: '600',
    fontSize: 15,
    color: '#041A36',
    flexWrap: "wrap",
    width: '100%',

  },
  cardPrice:{
    fontWeight: '500',
    fontSize: 14,
    color: '#041A36',
    opacity: 0.7,
  },
  cardPercent:{
    fontWeight: '700',
    fontSize: 20,
    color: theme.light.colors.primary,
  },


  collapseContainer:{
    marginTop: 2,
    marginBottom: 0,
  },
  extraInfo:{
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 8,
  },
  extraInfoText:{
    marginLeft: 10,
  }
  
});


