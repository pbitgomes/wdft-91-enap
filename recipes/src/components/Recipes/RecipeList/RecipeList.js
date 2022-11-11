import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from '../RecipeCard/RecipeCard';
import AddRecipe from '../AddRecipe/AddRecipe';
import recipesData from '../../../recipes.json'
// import { Navigate } from "react-router-dom";

function RecipeList() {
    const [recipes, setRecipes] = useState(recipesData)
    
    // verificar se o usuário está logado
    // const [isLogged, setIsLogged] = useState(true)

    // if(!isLogged) {
    //     // Navigate é usado quando vamos direcionar o usuário
    //     // link é usado quando clicamos em um botão, em um link
    //     return <Navigate to="/erro" />
    // }

    const deleteRecipe = (recipeKey) => {
        const newRecipes = recipes.filter((recipe, index) => {
            return index !== recipeKey
        })

        setRecipes(newRecipes)
    }

    const renderRecipes = recipes.map((recipe, index) => {
        return (
            <Col key={index}>
                <RecipeCard recipe={ recipe } deleteRecipe={ deleteRecipe } />
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                <AddRecipe recipes={ recipes } setRecipes={ setRecipes } />
            </Row>
            <Row>
                { renderRecipes }
            </Row>
        </Container>
    )
}

export default RecipeList