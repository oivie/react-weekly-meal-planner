const MealsAndIngridients = () => {
    return (
        <div className="whole-plan">
            <div className="meal-editing">
                <input 
                    type="text" className="meals-input" 
                    placeholder="Today is..." />

                <textarea 
                    placeholder="Write your meal plane here"/>

                <textarea 
                    placeholder="List of ingridients"/>
            </div>
        </div>
    )
}

export default MealsAndIngridients;