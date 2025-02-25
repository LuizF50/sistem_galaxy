function calculateOrbits() {
    const input = document.getElementById('orbit-input').value;
    const angles = input.split(',').map(Number);
    
    if (angles.some(isNaN)) {
        document.getElementById('result').innerText = "Por favor, insira apenas números separados por vírgulas.";
        return;
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);

    const fullCircle = 360;
    let currentLCM = angles[0];

    for (let i = 1; i < angles.length; i++) {
        currentLCM = lcm(currentLCM, angles[i]);
    }

    const completeTurns = currentLCM / fullCircle;

    document.getElementById('result').innerText = `${completeTurns} ${completeTurns === 1 ? 'volta completa' : 'voltas completas'}`;
}
