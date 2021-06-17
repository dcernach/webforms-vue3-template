<%@ Page Title="DTCO-Gestor | Router" Language="C#" MasterPageFile="~/Shared/_Layout.master" AutoEventWireup="true" CodeBehind="App.aspx.cs" Inherits="WebFormsVue3Template.Web.Pages.App" %>

<asp:Content ContentPlaceHolderID="main" runat="server">
    <div class="submenu">
        <ul class="menu menu--inverse menu--inline" style="border-bottom: 1px solid silver">
            <li class="menu__item">
                <router-link to="/home1" active-class="menu__item--active">Go to Home</router-link>
            </li>
            <li class="menu__item">
                <router-link to="/page1" active-class="menu__item--active">Go to Page 1</router-link>
            </li>
            <li class="menu__item">
                <router-link to="/page2" active-class="menu__item--active">Go to Page 2</router-link>
            </li>
        </ul>
    </div>

    <router-view></router-view>
</asp:Content>