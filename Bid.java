/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import javax.json.bind.annotation.JsonbDateFormat;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author kotso
 */
@Entity
@Table(name = "bid")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Bid.findAll", query = "SELECT b FROM Bid b"),
    @NamedQuery(name = "Bid.findByIdBid", query = "SELECT b FROM Bid b WHERE b.idBid = :idBid"),
    @NamedQuery(name = "Bid.findByTime", query = "SELECT b FROM Bid b WHERE b.time = :time"),
    @NamedQuery(name = "Bid.findByAmount", query = "SELECT b FROM Bid b WHERE b.amount = :amount")})
public class Bid implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "time")
   // @Temporal(TemporalType.DATE)
    private LocalDate time;

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idBid")
    private Integer idBid;
    @Basic(optional = false)
    @NotNull
    @Column(name = "amount")
    private float amount;

   @JsonbTransient
   @JoinColumn(name = "idItem", referencedColumnName = "idItem")
    @ManyToOne(optional = false)
      private Item idItem;
   
   
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    @ManyToOne(optional = false)
    private User idUser;

    public Bid() {
    }

    public Bid(Integer idBid) {
        this.idBid = idBid;
    }

    public Bid(Integer idBid, LocalDate time, float amount) {
        this.idBid = idBid;
        this.time = time;
        this.amount = amount;
    }

    @XmlTransient
    public Integer getIdBid() {
        return idBid;
    }

    public void setIdBid(Integer idBid) {
        this.idBid = idBid;
    }


    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

   public Item getIdItem() {
        return idItem;
    }

    public void setIdItem(Item idItem) {
        this.idItem = idItem;
    }

    
    public User getIdUser() {
        return idUser;
    }

    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idBid != null ? idBid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Bid)) {
            return false;
        }
        Bid other = (Bid) object;
        if ((this.idBid == null && other.idBid != null) || (this.idBid != null && !this.idBid.equals(other.idBid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Bid[ idBid=" + idBid + " ]";
    }

    public LocalDate getTime() {
        return time;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }
    
}
